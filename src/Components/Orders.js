import React from 'react';
import { useSelector } from 'react-redux';

const Orders = ()=> {
  const { orders } = useSelector(state => state);

  return (
    <div>
      <h1>Previous Orders</h1>
      <pre>
        {
          JSON.stringify(orders, null, 2)
        }
      </pre>
    </div>
  );
};

export default Orders;
