import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth from './auth';
import cart from './cart';
import  products  from './allProducts';
import AllProducts from '../Components/AllProducts';
import orders from './orders';

const reducer = combineReducers({
  auth,
  cart,
  products,
  orders,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from './auth';
export * from './cart';
export * from './allProducts'
export * from './orders';
