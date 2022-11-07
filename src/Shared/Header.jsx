import { Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import { FaSignOutAlt } from "react-icons/fa";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
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
        {user?.uid ? (
          <button
            onClick={() => logOut().then((r) => {})}
            className="flex text-red-500 font-bold items-center"
          >
            LOGOUT <FaSignOutAlt className="mx-2"></FaSignOutAlt>
          </button>
        ) : (
          <Link to="/login">LOGIN</Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
