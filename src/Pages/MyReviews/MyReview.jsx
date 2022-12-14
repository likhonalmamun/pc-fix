import React from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyReview = ({ review, setLoader, loader }) => {
  // toast.configure();
  const deleteReview = () => {
    // delete method for removing review
    fetch(`https://assignment-11-server-two.vercel.app/reviews/${review._id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        // delete messege toast
        toast.info("Review was deleted successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoader(!loader);
      })
      .catch((er) => console.error(er));
  };
  return (
    <>
      {" "}
      <div className=" border bg-blue-100 shadow-md sm:grid grid-cols-[3fr,1fr] gap-4 rounded-xl my-5">
        <div className="my-2.5 ml-3">
          <h1 className="text-lg text-red-500 font-bold">
            Service :{" "}
            <span className="text-blue-500">{review.serviceName}</span>
          </h1>
          <p className="font-bold text-blue-700  text-sm">
            Review :{" "}
            <span className="font-normal text-blue-500 italic">
              {review.text}
            </span>
          </p>
        </div>

        <div>
          <Link to={`/edit/${review._id}`}>
            <button className="sm:h-1/2 border-t p-1.5 sm:p-0 block font-semibold hover:bg-transparent hover:text-blue-600 duration-300 bg-blue-500 w-full shadow-md text-white rounded-tr-lg">
              Edit <FaRegEdit className="h-6 pb-1 font-bold ml-1 inline"></FaRegEdit>
            </button>
          </Link>
          <button
            onClick={deleteReview}
            className="sm:h-1/2 block border-b p-1.5 sm:p-0 font-semibold hover:bg-transparent hover:text-red-600 duration-300 bg-red-500 w-full shadow-md text-white  rounded-br-xl"
          >
            Delete <FaTrashAlt className="h-5 pb-1 font-bold ml-1 inline"></FaTrashAlt>
          </button>
        </div>
      </div>
    </>
  );
};

export default MyReview;
