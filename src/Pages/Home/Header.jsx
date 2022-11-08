import React from "react";
import headerImg from "../../assets/images/header-image.jpg";
const Header = () => {
  return (
    <div className="relative">
      <div>
        <img className="rounded-lg" src={headerImg} alt="" />
      </div>
      <div className="absolute left-8  top-28 z-10">
        <h1 className="text-4xl text-blue-300 font-semibold">
          In search of trusted <br /> hand for fixing your PC ?
        </h1>
        <h2 className="text-2xl mt-5 text-gray-300 font-bold">
          {" "}
          The responsibility of fixing <br /> your PC is "Mine" .
        </h2>
      </div>
    </div>
  );
};

export default Header;
