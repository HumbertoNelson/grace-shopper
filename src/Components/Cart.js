import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, createOrder } from '../store';

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
     
     
      <ul className="cart-container">
        {cart.lineItems.map((item) => (
          <li className="cart-item" key={item.id}>
            <img src={item.product.imageURL}/>
            <div>{item.product.name}</div>
            <div>
              Quantity: {item.quantity}
            </div>
            <button onClick={() => dispatch(removeItem(item.product))} id="deleteButton">
              -
            </button>
            <button onClick={() => dispatch(addItem(item.product))} id="addButton">
              +
            </button>
          </li>
        ))}
      </ul>
          <button onClick={() => dispatch(createOrder(cart))}>Place Order</button>
    </div>
  );
};

export default Cart;
