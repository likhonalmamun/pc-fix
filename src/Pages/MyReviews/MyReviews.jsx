import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import MyReview from "./MyReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const [loader, setLoader] = useState(true);
  // console.log(user.email);
  useEffect(() => {
    document.title = "PCFIX | MY REVIEWS";
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
      <div className="w-[83%] border bg-gray-50 p-10 mx-auto">
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
      <div className="text-3xl p-4 h-[80vh] bg-blue-100 text-blue-700 font-bold text-center">
        <h1 className="mt-[35vh]">You didn't add any reviews .</h1>
      </div>
    );
  }
};

export default MyReviews;
