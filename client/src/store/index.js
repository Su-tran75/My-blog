import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from '../reducers/reducer';

const store = createStore(
  // reducer
  reducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;
