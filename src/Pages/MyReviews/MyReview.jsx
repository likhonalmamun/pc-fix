import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const MyReview = ({ review, setLoader, loader }) => {
  const deleteReview = () => {
    // delete method for removing review
    fetch(`https://assignment-11-server-two.vercel.app/reviews/${review._id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        // for fetching reviews  again
        setLoader(!loader);
      })
      .catch((er) => console.error(er));
  };
  return (
    <div className=" border bg-blue-100 shadow-md grid grid-cols-[3fr,1fr] gap-4 rounded-xl my-5">
      <div className="my-2.5 ml-3">
        <h1 className="text-lg text-red-500 font-bold">
          Service : <span className="text-blue-500">{review.serviceName}</span>
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
          <button className="h-1/2 border-t block font-semibold hover:bg-transparent hover:text-blue-600 duration-300 bg-blue-500 w-full shadow-md text-white rounded-tr-lg">
            Edit
          </button>
        </Link>
        <button
          onClick={deleteReview}
          className="h-1/2 block border-b font-semibold hover:bg-transparent hover:text-red-600 duration-300 bg-red-500 w-full shadow-md text-white  rounded-br-xl"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyReview;
