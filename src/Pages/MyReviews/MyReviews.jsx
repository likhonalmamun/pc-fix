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
    fetch(`http://localhost:5000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews))
      .catch((er) => console.error(er));
  }, [loader, user]);
  // console.log(reviews);
  if (reviews.length > 0) {
    return (
      <div className="w-[80%] mx-auto">
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
      <div className="text-3xl p-4 bg-blue-100 text-blue-700 font-bold text-center">
        You didn't add any reviews .
      </div>
    );
  }
};

export default MyReviews;
