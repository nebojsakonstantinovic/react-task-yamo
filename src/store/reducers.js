import { combineReducers } from 'redux';

import ProductReducer from '../components/products/duck';
import CommentsReducer from '../components/comments/duck';

export default combineReducers({
  products: ProductReducer,
  comments: CommentsReducer,
});
