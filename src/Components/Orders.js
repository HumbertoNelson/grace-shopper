import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../store';

const Orders = ()=> {
  const { orders } = useSelector(state => state);
  const dispatch = useDispatch();

  let totalCost = 0;
  const itemCost = (item) => {
    const cost = item.quantity * item.product.price;
    totalCost += cost;
    return cost;
  }

  const reset = () => {
    totalCost = 0;
  }

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <div className='orders'>
      <h1>Previous Orders</h1>
      <ul className="order-container">
        {orders.map((order) => (
          <li className="order-item" key={order.id}>
            <div>
              Order created on {order.createdAt.slice(0,10)} at {order.createdAt.slice(11,16)} for:
            </div>
            <div>
              {order.lineItems.map((item) => (
                <div key={item.product.id}>
                  <div>{item.product.name} ({item.quantity}) - ${itemCost(item)}</div>
                </div>
              ))}
            </div>
            <div>
              You paid a total of ${totalCost} for this order
              {reset()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
