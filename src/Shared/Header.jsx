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
      <Navbar.Collapse className="flex items-center">
        <Link className="pt-2" to="/">
          HOME
        </Link>
        <Link className="pt-2" to="/services">
          SERVICES
        </Link>
        {user?.uid ? (
          <>
            <Link className="pt-2" to="/myReviews">
              MY REVIEWS
            </Link>
            <Link className="pt-2" to="/addService">
              ADD SERVICE
            </Link>
            <button
              onClick={() => logOut().then((r) => {})}
              className="flex text-red-500 font-bold items-center"
            >
              <img
                className="h-8 border-2 mx-2 rounded-full"
                title={user?.displayName}
                src={user?.photoURL}
                alt=""
              />{" "}
              LOGOUT <FaSignOutAlt className="mx-2"></FaSignOutAlt>
            </button>
          </>
        ) : (
          <Link className="pt-2" to="/login">
            LOGIN
          </Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
