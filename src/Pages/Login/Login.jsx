import { Spinner } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
const Login = () => {
  const [spinner, setSpiner] = useState(false);
  // title change
  useEffect(() => {
    document.title = "PCFIX | LOGIN";
  }, []);

  // dependency values
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { loginWithPass, googleLogin } = useContext(AuthContext);
  // ********** google sign in function ***************
  const googleSignIn = () => {
    setSpiner(true);
    googleLogin()
      .then((d) => {
        const jwtPayload = { email: d.user.email };
        // getting the jwt token and storing in LS
        fetch("https://assignment-11-server-two.vercel.app/jwt", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(jwtPayload),
        })
          .then((res) => res.json())
          .then((d) => {
            console.log(d.token);
            localStorage.setItem("PCFIX-token", d.token);
          })
          .catch((er) => console.error(er));
        // token fetching ends
        navigate(from);
        setError("");
        setSpiner(false);
      })
      .catch((er) => setError(er.message));
  };
  // ************* email password sign in function *************
  const login = (e) => {
    setSpiner(true);
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const jwtPayload = { email: email };
    loginWithPass(email, password)
      .then((r) => {
        // getting the jwt token and storing in LS
        fetch("https://assignment-11-server-two.vercel.app/jwt", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(jwtPayload),
        })
          .then((res) => res.json())
          .then((d) => {
            localStorage.setItem("PCFIX-token", d.token);
          });
        //  token fetching ends
        setSpiner(false);
        navigate(from);
        setError("");
      })
      .catch((er) => setError(er.message));

    e.target.reset();
  };

  if (spinner) {
    return (
      // spinner for signing in delay
      <div className="text-3xl p-4 h-[70vh] bg-blue-50 text-blue-700 font-bold text-center">
        <h1 className="mt-[28vh]">
          <Spinner
            size="xl"
            color="failure"
            aria-label="Center-aligned spinner example"
          />
        </h1>
      </div>
    );
  } else {
    return (
      // login form starts
      <form
        onSubmit={login}
        action=""
        className="sm:p-10 p-3 pb-14 border-2 shadow-2xl border-blue-300 rounded-xl w-[95%] sm:max-w-[450px] mx-auto"
      >
        <h1 className="text-3xl text-blue-500 font-bold mb-5"> Login !</h1>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            className="bg-gray-50 border focus:scale-105 duration-300 shadow-md border-gray-300 text-gray-900 
            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
             "
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your Password
          </label>
          <input
            type="password"
            name="password"
            className="bg-gray-50 border focus:scale-105 duration-300 shadow-md border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
              w-full p-2.5 "
            placeholder="password (at least 6 chars)"
            required
          />
        </div>
        {/* displaying error conditionally */}
        {error && (
          <p className="p-1 border border-red-500 text-sm w-fit rounded-md text-red-500">
            {error}
          </p>
        )}
        <p className="text-gray-400 my-3">
          New to this site ?{" "}
          <Link
            className="font-bold hover:underline hover:text-blue-500"
            to="/register"
          >
            Register
          </Link>{" "}
          now .
        </p>
        <button
          className="w-full shadow-lg hover:scale-105 duration-300 bg-blue-500 py-2 text-white rounded-lg
           font-bold"
          type="submit"
        >
          Login
        </button>
        <h3 className="text-xl text-center text-gray-400 mt-3">
          Or Continue With
        </h3>
        <button
          onClick={googleSignIn}
          className="w-full shadow-lg hover:scale-105 duration-300 border text-lg mt-3 border-blue-500 py-2 flex 
          items-center justify-center  rounded-lg font-bold"
        >
          <FaGoogle className="mx-2 text-blue-700"></FaGoogle> Google
        </button>
      </form>
    );
  }
};

export default Login;
