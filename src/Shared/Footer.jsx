import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 mt-20 dark:bg-gray-900">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="flex items-center">
            <img src="logo.png" className="mr-3 h-12" alt="FlowBite Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-gray-500 dark:text-white">
              PC<span className="text-blue-600 ">FIX</span>
            </span>
          </Link>
        </div>
        <div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
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
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              ></path>
            </svg>
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
