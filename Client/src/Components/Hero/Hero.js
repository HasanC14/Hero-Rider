import React from "react";
import { Link } from "react-router-dom";
import HeroCover from "../../Assets/HeroImage.png";
const Hero = () => {
  return (
    <section>
      <div className="dark:bg-primary">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-4xl font-bold leading-none sm:text-6xl dark:text-gray-900">
            From lessons to rides, we've got you covered with Hero Rider.
          </h1>
          <p className="mt-6 mb-8 md:text-lg text-sm sm:mb-12 xl:max-w-3xl dark:text-gray-900">
            At <span className="font-bold">Hero Rider</span> , we're more than
            just a ride-sharing app. We're building a community of drivers and
            riders who share our commitment to safety, reliability, and
            community. Join us today and become part of a network of heroes who
            are transforming the way we think about transportation.
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to={"/"}>
              <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">
                See Offers
              </button>
            </Link>
          </div>
        </div>
      </div>
      <img
        src={HeroCover}
        alt="Cover_Image"
        className="lg:w-1/2 w-full mx-auto -mt-48 rounded-2xl lg:-mt-96"
      />
    </section>
  );
};

export default Hero;
