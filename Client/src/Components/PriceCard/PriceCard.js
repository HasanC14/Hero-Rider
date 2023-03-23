import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PriceCard.css";

const PriceCard = () => {
  const [Products, setProducts] = useState([]);
  fetch("https://hero-rider-server-ashy.vercel.app/Products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    });

  return (
    <div>
      <p className="text-center md:text-7xl text-4xl mb-10 font-bold">
        Our Packages
      </p>
      <div className="flex md:flex-row flex-col justify-center -mt-48">
        {Products.map((product) => (
          <div
            key={product._id}
            class="wrapper antialiased text-gray-900 md:mr-10 -mb-48 "
          >
            <div>
              <img
                src={product.image}
                alt="random_image"
                class="w-96 object-cover object-center rounded-lg shadow-md"
              />

              <div class="relative px-4 -mt-16  ">
                <div class="bg-primary p-6 rounded-lg shadow-lg">
                  <div class="flex items-baseline">
                    <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                      New
                    </span>
                  </div>

                  <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                    {product.Title}
                  </h4>

                  <div class="mt-1">
                    {product.Price}$
                    <span class="text-gray-600 text-sm"> /monthly</span>
                  </div>
                  <div class="mt-4">
                    <span class=" text-md font-semibold">
                      {product.Ratings}/5 ratings{" "}
                    </span>
                    <span class="text-sm text-gray-600">
                      (based on {product.RatingsCount} ratings)
                    </span>
                  </div>
                  {console.log(product?._id)}
                  <Link to={`/ProductPayment/${product?._id}`}>
                    <button className="btn btn-sm mt-2 w-full">Buy Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
