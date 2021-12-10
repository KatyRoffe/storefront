import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './cart.js';
import categoriesReducer from './categories.js';
import productReducer from './products.js';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  cart: cartReducer,
})


const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store;