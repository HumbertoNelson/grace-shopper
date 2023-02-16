import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store';
import { fetchProducts } from '../store';
import ProductForm from './ProductForm';



const Products = () => {
    const { products, auth } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProducts());
      },[])
      
      return (
        <div>
        <ul className="product-container">
          {products.map((product) => (
            <li className='product-item'key = {product.id}>
              <img src={product.imageURL}></img>
              <p id='product-name'>{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Weight: {product.weight} Pounds</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <button onClick={() => dispatch(addItem(product))} id='Add Button'>Add To Cart</button>
            </li>
          ))}
        </ul>
        { auth.isAdmin ? <ProductForm /> : ''}
        </div>
      );
    }

export default Products;




