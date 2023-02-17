import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "../store";

const Orders = () => {
  const { orders } = useSelector((state) => state);
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
    <div className="orders">
      <h1>Previous Orders</h1>
      <ul className="order-container">
        {orders.map((order) => (
          <li className="order-item" key={order.id}>
            <div className="Order-created-box">
              <span className="Order-create-text">
                {" "}
                <h2>Order created on: </h2>
              </span>
              <h3> {order.createdAt.slice(0, 10)} </h3> <strong>at </strong>
              <h3>{order.createdAt.slice(11, 16)} </h3>
              <strong>for:</strong>
            </div>
            <br></br>
            <div className="items-ordered">
              {order.lineItems.map((item) => (
                <div key={item.product.id}>
                  <div>
                    <strong>
                      {item.product.name} ({item.quantity}) - ${itemCost(item)}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
            <br></br>
            <div id="total-cost">
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
