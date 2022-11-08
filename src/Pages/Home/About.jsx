import React from "react";
import pcfix from "../../assets/images/pcfix.jpg";
const About = () => {
  return (
    <div className="flex my-20 rounded-xl items-center shadow-lg p-7 justify-between">
      <div className="w-[30%]">
        <img src={pcfix} alt="" />
      </div>
      <div className="w-[50%] text-right">
        <h1 className="text-5xl mb-7 text-gray-500 font-semibold">
          About <span>PC</span>
          <span className="text-blue-500">FIX</span>
        </h1>
        <p className="italic font-normal text-yellow-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          excepturi modi laboriosam recusandae dolor nulla quod nostrum
          consectetur voluptatem quasi unde, quis quia? Aut, dolorum. Veniam vel
          esse obcaecati mollitia provident similique fugiat quo impedit cum et
          laboriosam modi perferendis eos magnam nulla numquam eligendi, maxime
          aperiam repellendus! Omnis, dicta.
        </p>
      </div>
    </div>
  );
};

export default About;
