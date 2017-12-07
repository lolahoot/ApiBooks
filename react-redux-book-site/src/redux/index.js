import {combineReducers} from "redux";
import books from "./reducers/bookReducer";
import list from "./reducers/listReducer";

export default combineReducers({
    books,
    list
  })
