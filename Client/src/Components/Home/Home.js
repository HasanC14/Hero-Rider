import React from "react";
import ChooseUs from "../ChooseUs/ChooseUs";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";
import PriceCard from "../PriceCard/PriceCard";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ChooseUs></ChooseUs>
      <PriceCard></PriceCard>
      <Faq></Faq>
    </div>
  );
};

export default Home;
