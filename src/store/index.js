import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './cart.js';
import categoriesReducer from './categories.js';
import productReducer from './products.js';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  cart: cartReducer,
})

// STOAGE NOT STOREFRONT BECAUSE KATY KEEPS FORGETTING
const store = () => {
  return createStore(reducers, composeWithDevTools(), applyMiddleware(thunk));
}

export default store;