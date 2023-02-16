import axios from 'axios';

const cart = (state = { lineItems: [] }, action) => {
  if (action.type === 'SET_CART' || action.type === 'CREATE_ORDER') {
    return action.cart;
  }
  if (action.type === 'ADD_ITEM' || action.type === 'REMOVE_ITEM') {
    return { ...state, lineItems: action.cart.lineItems.sort((a,b) => a.createdAt.localeCompare(b.createdAt)) }
  }
  return state;
};

export const createOrder = (order)=> {
  return async(dispatch)=> {
    const token = window.localStorage.getItem('token');
    const response = await axios.post('/api/orders', {order}, {
      headers: {
        authorization: token
      }
    });
    dispatch({ type: 'CREATE_ORDER', cart: {lineItems: []}});
  };
};


export const fetchCart = ()=> {
  return async(dispatch)=> {
    const token = window.localStorage.getItem('token');
    const response = await axios.get('/api/orders/cart', {
      headers: {
        authorization: token
      }
    });
    dispatch({ type: 'SET_CART', cart: response.data });
  };
};

export const removeItem = (item)=> {
  return async(dispatch)=> {
    const token = window.localStorage.getItem('token');
    const response = await axios.put('/api/orders/cart', {...item, quantity: 1}, {
      headers: {
        authorization: token
      }
    });
    dispatch({ type: 'REMOVE_ITEM', cart: response.data });
  };
};

export const addItem = (item)=> {
  return async(dispatch)=> {
    const token = window.localStorage.getItem('token');
    const response = await axios.post('/api/orders/cart', {...item, quantity: 1}, {
      headers: {
        authorization: token
      }
    });
    dispatch({ type: 'ADD_ITEM', cart: response.data });
  };
};


export default cart;
