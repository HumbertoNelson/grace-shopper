import React from "react";
import { useSelector } from "react-redux";

const AllReviews = () => {
  const { product } = useSelector(state => state.products);

  return (
    <div>
      <ul className="reviews-container">
        <h3>Customer Reviews:</h3>
        {product && product.reviews.map((review) => (
          <li key={review.id}>
            <p>{review.review}</p>
            <hr></hr>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllReviews;
