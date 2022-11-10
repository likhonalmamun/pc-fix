import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const EditReview = () => {
  const { review } = useLoaderData();
  useEffect(() => {
    document.title = "PCFIX | MY REVIEWS-Edit";
  }, []);
  const updateReview = (e) => {
    e.preventDefault();
    const newReview = { newText: e.target.review.value };
    // patch method for updating review
    fetch(`https://assignment-11-server-two.vercel.app/review/${review._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.result))
      .catch((er) => console.error(er));
    e.target.reset();
  };
  return (
    <div className="h-[60vh] border  p-10 w-[75%] mx-auto">
      <form className="mt-20" onSubmit={updateReview} action="">
        <h1 className="text-center font-semibold text-2xl text-blue-500">
          {" "}
          Service Name : <span className="italic">{review.serviceName}</span>
        </h1>
        <div className="mb-6">
          <label
            htmlFor="review"
            className="block m-2 text-sm font-medium text-gray-900 "
          >
            Edit your review
          </label>
          <textarea
            className="bg-blue-50 border focus:scale-105 duration-300 shadow-md border-gray-300 text-gray-900
             text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
              "
            name="review"
            id="review"
            rows="5"
            defaultValue={review.text}
            placeholder="type review here"
            required
          ></textarea>
        </div>

        <button
          className="w-full shadow-lg hover:scale-105 duration-300 bg-blue-500 py-2 text-white rounded-lg 
          font-bold"
          type="submit"
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default EditReview;
