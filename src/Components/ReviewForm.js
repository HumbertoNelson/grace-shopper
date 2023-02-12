import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchReview, setReview } from "../store/review";
import axios from "axios";
import { useDispatch } from "react-redux";

const ReviewForm = () => {
  const dispatch = useDispatch();

  const [review, setReview] = useState({ review: "" });

  const onChange = (ev) => {
    setReview({ ...review, [ev.target.name]: ev.target.value });
  };

  useEffect(() => {
    const fetchReview = async () => {
      const getReview = await axios("/api/products");
      setReview(getReview.data);
    };
    fetchReview();
  }, []);

  const getReview = (ev) => {
    ev.preventDefault();
    dispatch(fetchReview(review));
  };

  return (
    <div>
      <h2>Leave a review</h2>
      <form onSubmit={getReview}>
        <input
          // placeholder="Leave a Review Here"
          value={review.review}
          name="review"
          onChange={onChange}
        />
        <button type="submit">Post Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
