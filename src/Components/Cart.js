import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import { Link } from 'react-router-dom';
import { removeItem } from '../store';

const Cart = ()=> {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();
  
  return (
    <div>
      <h1>Cart</h1>
      <pre>
        {
          JSON.stringify(cart, null, 2)
        }
      </pre> 
      {/* //leaving this code in here as it's useful to look at cart when editing this view  */}
     
      <ul className="cart-container">
        {cart.lineItems.map((item) => (
          <li className="cart-item" key={item.id}>
            <img src={item.product.imageURL}/>
            <div>{item.product.name}</div>
            <div>
              Quantity: {item.quantity}
            </div>
            <button onClick={() => dispatch(removeItem(item))} id="deleteButton">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
