import { combineReducers } from "redux";
import CartData from "./reducers/destructuring";

import resultLike from "./reducers/like";

const AllReducer = combineReducers({
  users: CartData,
  value: resultLike
});
export default AllReducer;
