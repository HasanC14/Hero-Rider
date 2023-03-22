const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();

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
    //All Users
    app.get("/Users", async (req, res) => {
      let query = {};
      const Users = await UsersCollection.find(query).toArray();
      res.send(Users);
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
    //Search User
    app.get("/search/:input", async (req, res) => {
      try {
        const input = req.params.input;
        const query = {
          $or: [
            { email: { $regex: input, $options: "$i" } },
            { number: { $regex: input, $options: "$i" } },
            { Full_Name: { $regex: input, $options: "$i" } },
          ],
        };
        const result = await UsersCollection.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
      }
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
