import React from "react";
import "./PriceCard.css";
import car from "../../Assets/offer1.jpg";
import bike from "../../Assets/offer2.jpg";
const PriceCard = () => {
  return (
    <div>
      <p className="text-center md:text-7xl text-4xl mb-10 font-bold">
        Our Packages
      </p>
      <div className="flex md:flex-row flex-col justify-center -mt-48">
        <div class="wrapper antialiased text-gray-900 md:mr-10 m-0">
          <div>
            <img
              src={car}
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
                  Car Driving Lessons
                </h4>

                <div class="mt-1">
                  $200
                  <span class="text-gray-600 text-sm"> /monthly</span>
                </div>
                <div class="mt-4">
                  <span class=" text-md font-semibold">4/5 ratings </span>
                  <span class="text-sm text-gray-600">
                    (based on 234 ratings)
                  </span>
                </div>
                <button className="btn btn-sm mt-2 w-full">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper antialiased text-gray-900 -mt-80  md:mt-0">
          <div>
            <img
              src={bike}
              alt=" random imgee"
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
                  Bike Driving Lessons
                </h4>

                <div class="mt-1">
                  $100
                  <span class="text-gray-600 text-sm"> /monthly</span>
                </div>
                <div class="mt-4">
                  <span class="text-md font-semibold">4/5 ratings </span>
                  <span class="text-sm text-gray-600">
                    (based on 345 ratings)
                  </span>
                </div>
                <button className="btn btn-sm mt-2 w-full">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
