import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  // console.log(user.email);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews))
      .catch((er) => console.error(er));
  }, []);
  return (
    <div className="text-5xl text-center my-20">
      you did {reviews.length} reviews
    </div>
  );
};

export default MyReviews;
