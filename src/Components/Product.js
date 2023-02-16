import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import { fetchProduct } from "../store";
import AllReviews from "./AllReviews"

const Product = () => {
  const { id } = useParams();
  const { auth } = useSelector(state => state);
  const { product } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, []);

  return (
    product &&
    <div className="product-page-container">
      {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}
      <h2>{product.name}</h2>
      <img src={product.imageURL}></img>
      <p><b>Price:</b> ${product.price}</p>
      <p><b>Weight:</b> {product.weight} Pounds</p>
      <p><b>Size:</b> {product.size}</p>
      <p><b>Color:</b> {product.color}</p>
      <div>
        { auth.id ? <ReviewForm /> : <Link to="/">Log in to submit a review</Link>}
      </div>
      <AllReviews />
    </div>
  );
};

export default Product;
