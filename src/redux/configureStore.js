import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer, { getRocketsList } from './rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
});

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));
store.dispatch(getRocketsList());
export default store;
