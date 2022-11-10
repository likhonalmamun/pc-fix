import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import MyReview from "./MyReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    document.title = "PCFIX | MY REVIEWS";
    // loading reviews based on user email
    fetch(
      `https://assignment-11-server-two.vercel.app/reviews?email=${user.email}`,
      {
        headers: {
          authentication: `Bearer ${localStorage.getItem("PCFIX-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews))
      .catch((er) => console.error(er));
  }, [loader, user]);
  if (reviews?.length > 0) {
    return (
      // main content
      <div className="md:max-w-[83%] w-[97%] border bg-gray-50 sm:p-10 p-3 mx-auto">
        <h1 className="text-3xl text-blue-500 font-bold text-center">
          Your reviews
        </h1>
        {reviews.map((review) => (
          <MyReview
            key={review._id}
            loader={loader}
            setLoader={setLoader}
            review={review}
          ></MyReview>
        ))}
      </div>
    );
  } else {
    return (
      // message for empty content
      <div className="text-3xl mx-5 my-[35vh] p-6  bg-blue-100 text-blue-700 font-bold text-center">
        <h1 >You didn't add any reviews yet.</h1>
      </div>
    );
  }
};

export default MyReviews;
