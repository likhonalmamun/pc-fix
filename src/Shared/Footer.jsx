import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="p-4 border-t-2  bg-white sm:p-6 mt-20 dark:bg-gray-900">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-12" alt="PCFIX" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-gray-500 dark:text-white">
              PC<span className="text-blue-600 ">FIX</span>
            </span>
          </Link>
        </div>
        <div className="text-right">
          <div>
            <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              CONTACT US
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
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
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <Link to="/" className="hover:underline text-gray-600">
            PC<span className="text-blue-600 ">FIX</span>™
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 text-xl sm:justify-center sm:mt-0">
          <Link
            to="/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            {" "}
            <FaFacebook></FaFacebook>
            <span className="sr-only">Facebook page</span>
          </Link>
          <Link
            to="/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <FaYoutube></FaYoutube>
          </Link>
          <Link
            to="/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <FaTwitter></FaTwitter>
          </Link>
          <Link
            to="/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <FaInstagram></FaInstagram>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
