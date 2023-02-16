import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addReview } from "../store";

const ReviewForm = () => {
  const { auth } = useSelector(state => state);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [review, setReview] = useState({
    review: '',
  });

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setReview({ ...review, [name]: value });
  };

  const onSumbit = (ev) => {
    ev.preventDefault();
    dispatch(addReview({ ...review, userId: auth.id, productId: id }));
    setReview({ review: '' });
  };

  return (
    <div className="review-form">
      <form onSubmit={onSumbit}>
        <input
          placeholder="Leave a review"
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
