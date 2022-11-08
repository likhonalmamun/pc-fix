import React from "react";
import headerImg from "../../assets/images/header-image.jpg";
const Banner = () => {
  return (
    <div className="relative">
      <div>
        <img className="rounded-lg" src={headerImg} alt="" />
      </div>
      <div className="absolute left-8  top-[30%] z-10">
        <h1 className="text-4xl text-blue-300 font-semibold">
          In search of trusted <br /> hand for fixing your PC ?
        </h1>
        <h2 className="text-2xl mt-5 text-gray-300 font-bold">
          The responsibility of fixing <br /> your PC is "Mine" .
        </h2>
      </div>
      <div className="absolute top-[70%] right-8">
        <h1 className="text-7xl font-bold text-gray-300">
          PC<span className="text-blue-400">FIX</span>
        </h1>
        <p className="text-white text-center italic">
          Truly cares for your computer
        </p>
      </div>
    </div>
  );
};

export default Banner;
