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
  console.log(reviews);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews))
      .catch((er) => console.error(er));
  }, [loader]);

  const addReview = (e) => {
    e.preventDefault();
    const review = {
      serviceName: serviceName,
      serviceId: _id,
      reviewerName: user.displayName,
      reviewerImg: user.photoURL,
      text: e.target.review.value,
      reviewerEmail: user.email,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => setLoader(!loader))
      .catch((er) => console.log(er));
    e.target.reset();
  };
  return (
    <>
      <div className="w-[70%]  mx-auto ">
        <Card className="h-full" imgSrc={serviceImg}>
          <h5 className="text-2xl font-bold tracking-tight text-blue-500 ">
            {serviceName}
          </h5>
          <p className="font-normal text-gray-600 dark:text-gray-400">
            {serviceDescription}
          </p>
          <h5 className="text-2xl font-bold tracking-tight text-gray-500 ">
            Only For {serviceCost} BDT
          </h5>
        </Card>
      </div>

      <div className="w-[70%]  mx-auto my-20">
        <h1 className="text-3xl font-semibold text-blue-500 ">
          Customer Reviews
        </h1>
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
              <input
                type="text"
                id="review"
                name="review"
                className="bg-gray-50 border focus:scale-105 duration-300 shadow-md
               border-gray-300 text-gray-900 text-sm rounded-tl-xl rounded-bl-xl
                 focus:border-blue-500 block w-full p-2.5"
                placeholder="write a review on this service"
                required
              />
              <button
                className="w-full h-fit shadow-lg hover:scale-105 duration-300
               bg-blue-500 py-2.5 text-white rounded-tr-xl rounded-br-xl font-bold"
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

        <div>
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
