import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, createOrder } from '../store';

const Cart = ()=> {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();
  
  let totalCost = 0;
  const itemCost = (item) => {
    const cost = item.quantity * item.product.price;
    totalCost += cost;
    return cost;
  }

  return (
    <div>
      <h1>Cart</h1>
      <ul className="cart-container">
        {cart.lineItems.map((item) => (
          <li className="cart-item" key={item.id}>
            <img src={item.product.imageURL}/>
            <div>{item.product.name}</div>
            <div>
              Quantity: {item.quantity}
            </div>
            <div>
              Price: ${itemCost(item)}
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
      <div id="cost">
        Total cost: ${totalCost} &emsp;
      <button id="order-button" onClick={() => dispatch(createOrder(cart))}>Place Order</button> 
      </div>
    </div>
  );
};

export default Cart;
