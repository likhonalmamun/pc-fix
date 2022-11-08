import React from "react";
import Banner from "./Banner";
import Overview from "./Overview";
import About from "./About";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Overview></Overview>
      <About></About>
    </div>
  );
};

export default Home;
