import React, { useEffect, useState } from "react";
import { addReview } from "../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ReviewForm = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { id } = useParams();
  const [review, setReview] = useState({});

  console.log(review);

  const onChange = (ev) => {
    setReview({ ...review, [ev.target.name]: ev.target.value });
  };

  useEffect(() => {
    const reviewForm = () => {
      setReview({
        review: "",
        productId: id,
        userId: auth.id,
      });
    };
    reviewForm();
  }, []);

  const onSumbit = (ev) => {
    ev.preventDefault();
    dispatch(addReview(review));
  };

  return (
    <div>
      <h2>Leave a review</h2>
      <form onSubmit={onSumbit}>
        <input
          placeholder="Leave a Review Here"
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
