import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../store";
import axios from "axios";

const AllReviews = (props) => {
  //const [prevReviews, setPrevReviews] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  let reviews = [];
  console.log(reviews);

  // useEffect(() => {
  //   dispatch(fetchReviews(id));
  // }, []);

  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.review}</p>
          </li>
        ))}
      </ul>
      <hr></hr>
    </div>
  );
};

export default AllReviews;
