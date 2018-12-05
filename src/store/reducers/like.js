import * as actionType from "../actions";

const initialState = {
  value: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === actionType.LIKE) {
    if (!state.value) {
      return {
        ...state,
        value: state.value + 1
      };
    } else {
      return {
        ...state,
        value: state.value - 1
      };
    }
  }

  return state;
};

export default reducer;
