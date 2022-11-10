import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="p-4 border-t-2  bg-gray-100 sm:p-6 mt-20 ">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-12" alt="PCFIX" />
            <span className="self-center text-3xl font-bold whitespace-nowrap text-gray-500 ">
              PC<span className="text-blue-600 ">FIX</span>
            </span>
          </Link>
        </div>
        <div className="text-right">
          <div>
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase ">
              CONTACT me
            </h2>
            <ul className="text-gray-600 d">
              <li className="mb-1">
                <Link to="/" className="hover:underline">
                  pcfix@gmail.com
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  +88013******48
                </Link>
              </li>
              <li>
                address : <br /> New Market Road, Kalinagar , Kushtiya
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-400 sm:mx-auto " />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center ">
          © 2022{" "}
          <Link to="/" className="hover:underline text-gray-600">
            PC<span className="text-blue-600 ">FIX</span>™
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 text-xl sm:justify-center sm:mt-0">
          <Link to="/" className="text-gray-500 hover:text-gray-900 ">
            {" "}
            <FaFacebook></FaFacebook>
            <span className="sr-only">Facebook page</span>
          </Link>
          <Link to="/" className="text-gray-500 hover:text-gray-900 ">
            <FaYoutube></FaYoutube>
          </Link>
          <Link to="/" className="text-gray-500 hover:text-gray-900 ">
            <FaTwitter></FaTwitter>
          </Link>
          <Link to="/" className="text-gray-500 hover:text-gray-900">
            <FaInstagram></FaInstagram>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
