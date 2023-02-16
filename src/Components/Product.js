import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import { fetchProduct } from "../store";

const Product = () => {
  const { id } = useParams();
  const { product } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(product, null, 2)}</pre>
      <ReviewForm />
      {/* <AllReviews reviews={product} /> */}
    </div>
  );
};

export default Product;
