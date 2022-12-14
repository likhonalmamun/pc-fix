import { Card } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Review from "./Review";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [loader, setLoader] = useState(true);
  const [reviews, setReviews] = useState([]);
  const { service } = useLoaderData();
  const { serviceName, serviceDescription, serviceImg, _id, serviceCost } =
    service;
  useEffect(() => {
    // loading service details
    fetch(`https://assignment-11-server-two.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews))
      .catch((er) => console.error(er));
  }, [loader]);

  const addReview = (e) => {
    e.preventDefault();
    // object format for storing in db
    const review = {
      serviceName: serviceName,
      serviceId: _id,
      reviewerName: user.displayName,
      reviewerImg: user.photoURL,
      text: e.target.review.value,
      reviewerEmail: user.email,
      time: Date.now(),
    };
    // post method for adding new review
    fetch("https://assignment-11-server-two.vercel.app/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => setLoader(!loader))
      .catch((er) => console.error(er));
    e.target.reset();
  };

  return (
    <>
      <div className="sm:w-[70%] w-[95%] mx-auto ">
        <Card className="h-full" imgSrc={serviceImg}>
          <h5 className="text-2xl font-semibold sm:font-bold tracking-tight text-blue-500 ">
            {serviceName}
          </h5>
          <p className="font-normal text-sm sm:text-md text-gray-600 ">{serviceDescription}</p>
          <h5 className="sm:text-2xl text-xl font-bold tracking-tight text-gray-500 ">
            Only For {serviceCost} BDT
          </h5>
        </Card>
      </div>

      <div className="sm:w-[70%] w-[95%]  mx-auto my-20">
        <h1 className="sm:text-3xl text-2xl font-semibold text-blue-500 ">
          Customer Reviews
        </h1>
        {/* first conditional rendering  */}
        {user?.uid ? (
          <form onSubmit={addReview} className="my-6 " action="">
            <div className="flex items-center">
              <img
                title={user?.displayName}
                className="h-10 rounded-full m-2"
                src={user?.photoURL}
                alt=""
              />
              <label
                htmlFor="review"
                className="block m-2 text-sm font-medium text-gray-900 "
              >
                Add a review ...
              </label>
            </div>
            <div className="grid mb-10 grid-cols-[2.5fr,1fr]">
              <textarea
                rows={1}
                type="text"
                id="review"
                name="review"
                className="bg-gray-50 border text-sm sm:text-base focus:scale-105 duration-300 shadow-md
               border-gray-300 text-gray-900 rounded-tl-xl rounded-bl-xl
                 focus:border-blue-500 block w-full p-2.5"
                placeholder="write a review on this service"
                required
              />
              <button
                className="w-full h-fit shadow-lg hover:scale-105 duration-300
               bg-blue-500 py-[11px] sm:text-base text-sm text-white rounded-tr-xl rounded-br-xl sm:font-bold"
                type="submit"
              >
                Post Review
              </button>
            </div>
            <hr className="border-t-2 border-blue-600" />
          </form>
        ) : (
          <div className="p-7 border-2 text-center text-xl my-5 rounded-lg ">
            <Link
              className="text-blue-500 hover:underline font-bold"
              to="/login"
            >
              Login
            </Link>{" "}
            to add reviews !!
          </div>
        )}
        {/* second conditional rendering */}
        {reviews.length === 0 ? (
          <div className="font-bold p-2 text-center bg-blue-100 text-blue-700">
            No reviews available on this service !
          </div>
        ) : (
          <div>
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceDetails;
