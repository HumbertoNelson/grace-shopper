import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/products");
    dispatch({ type: "SET_PRODUCTS", products: response.data });
  };
};

export const fetchProduct = (id) => {
  return async(dispatch) => {
    const response = await axios.get(`/api/products/${id}`); 
    dispatch({ type: 'SET_PRODUCT', product: response.data });
  };
};

export const addProduct = (product) => {
  return async(dispatch) => {
    const response = await axios.post('/api/products', product);
    dispatch({ type: 'ADD_PRODUCT', product: response.data});
  }
}

export const addReview = (review) => {
  return async(dispatch) => {
    const response = await axios.post(`/api/products/${review.productId}/reviews`, review);
    dispatch({ type: 'ADD_REVIEW', review: response.data});
  }
}

const products = (state = {}, action)=> {
  if (action.type === 'SET_PRODUCTS') {
    return { ...state, products: action.products };
  }
  if (action.type === 'SET_PRODUCT') {
    return { ...state, product: action.product };
  }
  if (action.type === 'ADD_PRODUCT') {
    return { ...state, products: [action.product, ...state.products] };
  }
  if (action.type === 'ADD_REVIEW') {
    return { ...state, product: { ...state.product, reviews: state.product.reviews.concat(action.review) } };
  }
  return state;
};

export default products;
