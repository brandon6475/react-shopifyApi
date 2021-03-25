import { combineReducers } from 'redux';
import search from './reducers/search';
import cart from './reducers/cart';
import shop  from './reducers/shop';

export default combineReducers({ search, cart, shop });