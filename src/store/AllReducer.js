import { combineReducers } from "redux";

import resultLike from "./reducers/like";

const allReducer = combineReducers({
  data: resultLike
});
export default allReducer;
