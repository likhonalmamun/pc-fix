import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="mb-10 pt-5" fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <img src="logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-gray-600 text-2xl font-semibold dark:text-white">
          PC<span className="text-blue-600 ">FIX</span>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/">HOME</Link>
        <Link to="/services">SERVICES</Link>
        <Link to='/login'>LOGIN</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
