import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth from './auth';
import cart from './cart';
import orders from './orders';
import profile from './profile';

const reducer = combineReducers({
  auth,
  cart,
  orders,
  profile,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from './auth';
export * from './cart';
export * from './orders';
export * from './profile';
