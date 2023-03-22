const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@back-prac-2-admin.sldkkq5.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const UsersCollection = client.db("HeroRider").collection("Users");
    const ProductCollection = client.db("HeroRider").collection("Product");
    //Add User
    app.put("/addUser", async (req, res) => {
      const User = req.body;
      const result = await UsersCollection.insertOne(User);
      res.send(result);
    });
    //Current User
    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const user = await UsersCollection.findOne(query);
      res.send(user);
    });
    //Admin Route
    app.get("/users/admin/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const user = await UsersCollection.findOne(query);
      res.send({ isAdmin: user?.role === "Admin" });
    });

    // All Users with pagination
    app.get("/Users", async (req, res) => {
      const currentPage = parseInt(req.query.currentPage) || 1;
      const perPage = 10;
      const skip = (currentPage - 1) * perPage;
      const totalUsers = await UsersCollection.countDocuments();
      const totalPages = Math.ceil(totalUsers / perPage);

      const Users = await UsersCollection.find()
        .skip(skip)
        .limit(perPage)
        .toArray();

      res.send({
        users: Users,
        currentPage: currentPage,
        totalPages: totalPages,
      });
    });

    //All Product
    app.get("/Products", async (req, res) => {
      let query = {};
      const Products = await ProductCollection.find(query).toArray();
      res.send(Products);
    });
    //Delete User
    app.delete("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await UsersCollection.deleteOne(query);

      if (result.deletedCount === 1) {
        res.send({ success: true, message: "User deleted successfully" });
      } else {
        res.send({ success: false, message: "Failed to delete user" });
      }
    });
    // //Search User
    app.get("/search/:input", async (req, res) => {
      try {
        const currentPage = parseInt(req.query.currentPage) || 1;
        const perPage = 10;
        const input = req.params.input;
        const query = {
          $or: [
            { email: { $regex: input, $options: "$i" } },
            { number: { $regex: input, $options: "$i" } },
            { Full_Name: { $regex: input, $options: "$i" } },
          ],
        };
        const totalUsers = await UsersCollection.countDocuments(query);
        const totalPages = Math.ceil(totalUsers / perPage);
        const skip = (currentPage - 1) * perPage;
        const result = await UsersCollection.find(query)
          .skip(skip)
          .limit(perPage)
          .toArray();
        res.send({
          users: result,
          currentPage: currentPage,
          totalPages: totalPages,
        });
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
      }
    });

    //Product Payment
    app.get("/ProductPayment/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await ProductCollection.findOne(query);
      res.send(result);
    });
    app.post("/create-payment-intent", async (req, res) => {
      const Price = req.body.Price;
      const amount = Price * 100;
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "usd",
        amount: amount,
        payment_method_types: ["card"],
      });
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });
  } finally {
  }
}
run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
