import React from "react";

const Review = ({ review }) => {
  return (
    <>
      {" "}
      <div className="bg-blue-100 my-4 rounded-md">
        <div className="flex  items-center">
          <img
            className="h-8 rounded-full m-2"
            src={review.reviewerImg}
            alt=""
          />

          <h1 className="block  text-sm font-medium text-gray-900 ">
            {review.reviewerName}
          </h1>
        </div>
        <h1 className=" text-blue-800 text-sm font-semibold px-2 pb-2 rounded">
          {review.text}
        </h1>
      </div>
      <hr className="border-t-2" />
    </>
  );
};

export default Review;
