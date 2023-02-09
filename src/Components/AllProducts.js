import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'



const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          const result = await axios('/api/products');
          setProducts(result.data);
        }
        fetchProducts();
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
            </li>
          ))}
        </ul>
      );
    }

export default Products;




