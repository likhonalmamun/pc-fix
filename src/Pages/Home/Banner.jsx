import React from "react";

import headerImg from "../../assets/images/header-image.jpg";
const Banner = () => {
  return (
    <div className="relative">
      <div>
        <img className="rounded-lg" src={headerImg} alt="" />
      </div>
      <div className="sm:absolute sm:p-0 bg-blue-200 sm:bg-transparent w-full sm:w-auto sm:text-left text-center p-5 left-8  top-[30%] z-10">
        <h1 className="md:text-4xl head text-xl sm:text-3xl text-blue-700 sm:text-blue-300 font-semibold">
          In search of trusted <br /> hand for fixing your PC ?
        </h1>
        <h2 className="sm:text-2xl  text-sm mt-5 text-green-700 sm:text-gray-300 font-semibold md:font-bold">
          The responsibility of fixing <br /> your PC is "Mine" .
        </h2>
      </div>
      <div className="sm:absolute w-full sm:w-auto sm:bg-transparent bg-blue-200 sm:text-left text-center sm:p-0 p-5 top-[70%] right-8">
        <h1 className="lg:text-7xl text-xl sm:text-4xl  font-bold sm:text-gray-300">
          PC<span className="text-blue-400">FIX</span>
        </h1>
        <p className="sm:text-white text-blue-800 text-sm sm:text-base text-center italic">
          Truly cares for your computer
        </p>
      </div>
    </div>
  );
};

export default Banner;
