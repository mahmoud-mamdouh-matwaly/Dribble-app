import { combineReducers } from "redux";

import resultLike from "./reducers/like";

const AllReducer = combineReducers({
  data: resultLike
});
export default AllReducer;
