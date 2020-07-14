import { combineReducers } from "redux";
import products from "./products";
import ItemEdit from "./ItemEdit"

const appReducers = combineReducers({
  products,
  ItemEdit
});

export default appReducers;
