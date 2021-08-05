import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from "../reducers/entries.reducers";
import modalReducer from '../reducers/modals.reducers'

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalReducer,
    }), composeWithDevTools()
  );
};

export default configureStore;
