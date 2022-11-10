import React, { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    document.title = "PCFIX | BLOGS";
  }, []);
  return (
    <div>
      <div className="bg-red-50 text-red-700 italic sm:max-w-[80%] w-[95%] shadow-xl rounded-md my-9 mx-auto font-semibold">
        <h1 className="sm:text-[23px] text-xl bg-red-500 rounded-md p-4 text-white">
          Q1 : What are the differences between SQL(Structured Query Language)
          and NoSQL ?
        </h1>
        <p className="px-4 pt-5 underline font-bold">Ans : </p>
        <p className="px-4 text-sm sm:text-md pb-8">
          SQL is Relational Database Management System and NoSQL is non
          Relational . SQL is not a good option for storing hierarchical data ,
          NoSQL is best option for this . SQL stores data in a predefined
          structure and they are vertically scalable . On the other hand , NoSQL
          stores data in dynamic schema and horizontally scalable. SQL databases
          are the best option for complex queries unlike NoSQL.However SQL is
          not easy to use like NoSQL .
        </p>
      </div>
      <hr className="sm:max-w-[80%] w-[95%] mx-auto border-t-[3px]" />
      <div className="bg-blue-100 text-blue-700 italic sm:max-w-[80%] w-[95%] shadow-xl rounded-md my-9 mx-auto font-semibold">
        <h1 className="sm:text-[23px] text-xl bg-blue-500 rounded-md p-4 text-white">
          Q2 : What is JWT, and how does it work ?
        </h1>
        <p className="px-4 pt-5 underline font-bold">Ans : </p>
        <p className="px-4 text-sm sm:text-md pb-8">
          JWT(JSON Web Token) is an open standard transmitter for share
          information as JSON object between two parties . It is readable and
          user friendly . When a user logs in , the identity provider generates
          a JWT and user gets it through server. If the user tries to access
          protected information , the JWT is given to the server through HTTP
          authentication header and the server verifies the token using a secret
          key to ensure security of data.
        </p>
      </div>
      <hr className="sm:max-w-[80%] w-[95%] mx-auto border-t-[3px]" />
      <div className="bg-red-50 text-red-700 italic sm:max-w-[80%] w-[95%] shadow-xl rounded-md my-9 mx-auto font-semibold">
        <h1 className="sm:text-[23px] text-xl bg-red-500 rounded-md p-4 text-white">
          Q3 : What are the differences between javascript and NodeJS? ?
        </h1>
        <p className="px-4 pt-5 underline font-bold">Ans : </p>
        <p className="px-4 text-sm sm:text-md pb-8">
          JavaScript is a client side scripting language . It is a high level
          programming language and runs in browser . But NodeJs is a runtime
          environment of javascript for using it outside the browser (mostly in
          server side). JavaScript is used for frontend development and it is
          capable of DOM manipulation . NodeJs is used for backend development .
          V8 engine parses NodeJs codes into JavaScript and runs it .
        </p>
      </div>
      <hr className="sm:max-w-[80%] w-[95%] mx-auto border-t-[3px]" />
      <div className="bg-blue-100 text-blue-700 italic sm:max-w-[80%] w-[95%] shadow-xl rounded-md my-9 mx-auto font-semibold">
        <h1 className="sm:text-[23px] text-xl bg-blue-500 rounded-md p-4 text-white">
          Q4 : How does NodeJS handle multiple requests at the same time ?
        </h1>
        <p className="px-4 pt-5 underline font-bold">Ans : </p>
        <p className="px-4 text-sm sm:text-md pb-8">
          NodeJs handles multiple requests at the same time using EventLoop and
          EventQueue . When non-blocking request comes to NodeJs , it forwards
          the request to EventLoop and executes the request . When a blocking
          request comes to NodeJs , it sends the request to EventQueue and
          executes in the background and the EventLoop works without being
          blocked . That's how NodeJs handles multiple request without delay .
        </p>
      </div>
      <hr className="sm:max-w-[80%] w-[95%] mx-auto border-t-[3px]" />
    </div>
  );
};

export default Blogs;
