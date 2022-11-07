import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  const login = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    e.target.reset();
  };
  return (
    <form
      onSubmit={login}
      action=""
      className="p-10 pb-14 border-2 shadow-2xl border-blue-300 rounded-xl max-w-[450px] mx-auto"
    >
      <h1 className="text-3xl text-blue-500 font-bold mb-5"> Login !</h1>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          className="bg-gray-50 border focus:scale-105 duration-300 shadow-md border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@example.com"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your Password
        </label>
        <input
          type="password"
          name="password"
          className="bg-gray-50 border focus:scale-105 duration-300 shadow-md border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="password (at least 6 chars)"
          required
        />
      </div>
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
        className="w-full shadow-lg hover:scale-105 duration-300 bg-blue-500 py-2 text-white rounded-lg font-bold"
        type="submit"
      >
        Login
      </button>
      <h3 className="text-xl text-center text-gray-400 mt-3">
        Or Continue With
      </h3>
      <button className="w-full shadow-lg hover:scale-105 duration-300 border text-lg mt-3 border-blue-500 py-2 flex items-center justify-center  rounded-lg font-bold">
        <FaGoogle className="mx-2 text-blue-700"></FaGoogle> Google
      </button>
    </form>
  );
};

export default Login;
