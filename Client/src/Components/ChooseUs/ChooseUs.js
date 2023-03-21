import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../../Assets/pic1.jpg";
import pic2 from "../../Assets/pic2.jpg";
const ChooseUs = () => {
  return (
    <div className="flex flex-col justify-center mb-10">
      <p className="text-center md:text-7xl text-4xl mb-10 font-bold">
        Why Choose Us?
      </p>
      <div className="flex md:flex-row md:ml-48 md:mr-48 md:mb-28 m-5">
        <div className="w-1/2 flex justify-start">
          <img src={pic1} className="md:w-96 w-48 rounded-xl" alt="Album" />
        </div>
        <div className="flex justify-center mt-auto mb-auto w-1/2">
          <div>
            <h2 className="md:text-4xl font-bold mb-3">
              Our Secure and Safer Rides
            </h2>
            <p className="md:text-2xl mb-3">
              Do more than just get people from A to B: make the ride matter
              with ground transportation solutions experiences from our Business
              that build relationships and drive results
            </p>
            <Link className="md:text-2xl" to={"/"}>
              Learn More ➡️
            </Link>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row md:ml-48 md:mr-48 md:mb-28 m-5">
        <div className="flex justify-center mt-auto mb-auto w-1/2">
          <div>
            <h2 className="md:text-4xl font-bold mb-3">
              Our commitment to your safety
            </h2>
            <p className="md:text-2xl mb-3">
              I also agree that Uber or its representatives may contact me by
              email, phone, or SMS (including by automated means) at the email
              address or number I provide. including for marketing
            </p>
            <Link className="md:text-2xl" to={"/"}>
              Learn More ➡️
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img src={pic2} className="md:w-96 w-48 rounded-xl" alt="Album" />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
