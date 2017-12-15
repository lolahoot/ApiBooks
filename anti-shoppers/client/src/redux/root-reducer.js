import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  customer,
  shopper
})

export default createStore(rootReducer, applyMiddleware(thunk));
