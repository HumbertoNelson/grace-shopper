import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios("/api/products");
      setProducts(result.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}> {product.name}</Link>
            <p>Price: {product.price}</p>
            <p>Weight: {product.weight}</p>
            <p>Size: {product.size}</p>
            <p>Color: {product.color}</p>
            <img src={product.imageUrl}></img>
          </li>
        ))}
      </ul>
      <hr></hr>
    </div>
  );
};

export default Products;
