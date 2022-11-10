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
          Myself <span className="font-bold">Likhon Al Mamun</span> . Welcome to{" "}
          <span className="font-bold">PCFIX </span>. Here I am providing some
          essential services related to computer servicing or something like
          that . Here I do servicing of PC , windows setup , activating , office
          software selling and so on . I have been working on these services for
          years . I do provide these services all by myself . Check out my
          services and feel free to give feedback so that I can improve myself
          and the services I am providing .
        </p>
      </div>
    </div>
  );
};

export default About;
