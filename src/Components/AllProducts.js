import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store';
import { fetchProducts } from '../store';
import ProductForm from './ProductForm';
import { Link } from 'react-router-dom';

const Products = () => {
  const { auth } = useSelector(state => state);
  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    },[])
    
  return (
    <div>
    <ul className="product-container">
      {products && products.map((product) => (
        <li className='product-item'key = {product.id}>
          <img src={product.imageURL}></img>
          <Link to={`/products/${product.id}`}><p id='product-name'>{product.name}</p></Link>
          <p>Price: ${product.price}</p>
          <p>Weight: {product.weight} Pounds</p>
          <p>Size: {product.size}</p>
          <p>Color: {product.color}</p>
          { auth.id ? <button onClick={() => dispatch(addItem(product))} id='Add Button'>Add To Cart</button> : <Link to="/">Please login to add to cart</Link>}
        </li>
      ))}
    </ul>
    { auth.isAdmin ? <ProductForm /> : ''}
    </div>
  );
}

export default Products;
