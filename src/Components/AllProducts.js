import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { addItem } from '../store';
import { fetchProducts } from '../store';



const Products = () => {
    const { products } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProducts());
      }, [])
      
      return (
        console.log(products),
        <ul>
          {products.map((product) => (
            <li key = {product.id}>{product.name}
              <p>Price: {product.price}</p>
              <p>Weight: {product.weight}</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <img src={product.imageUrl}></img>
              <button onClick={() => dispatch(addItem(product))} id='Add Button'>Add To Cart</button>
            </li>
          ))}
        </ul>
      );
    }

export default Products;




