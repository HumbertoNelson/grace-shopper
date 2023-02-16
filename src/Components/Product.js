import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import { fetchProduct } from "../store";
import { fetchReviews } from "../store";
import AllReviews from "./AllReviews";
import axios from "axios";

const Product = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.products);
  console.log(product, "product firing");
  // const { reviews } = useSelector((state) => state);
  // console.log(reviews);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProduct(id));
  // }, []);

  useEffect(() => {
    dispatch(fetchProduct(id));
    //setReviews(product.reviews);
    console.log("USe effect ");
  }, []);

  // console.log(reviews, "This is a test");

  return (
    <div>
      <pre>{JSON.stringify(product, null, 2)}</pre>
      <ReviewForm />
      <AllReviews reviews={product} />
    </div>
  );
};
export default Product;
