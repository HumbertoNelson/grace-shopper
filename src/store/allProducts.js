import axios from 'axios';

const products = (state = [], action)=> {
  if (action.type === 'SET_PRODUCTS') {
    return action.products;
  }
  if (action.type === 'ADD_PRODUCT') {
    return [...state, action.product]
  }
  return state;
};

export const fetchProducts = () => {
  return async(dispatch) => {
    const response = await axios.get('/api/products'); 
    dispatch({ type: 'SET_PRODUCTS', products: response.data });
  };
};

export const addProduct = (product) => {
  return async(dispatch) => {
    const response = await axios.post('/api/products', product);
    dispatch({ type: 'ADD_PRODUCT', product: response.data});
  }
}

export default products;
