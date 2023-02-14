import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../store';

const Orders = ()=> {
  const { orders } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <div className='orders'>
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
