// import * as actionType from "../actions";
import CardData from "./destructuring";
const initialState = {
  value: 0
};
const initialData = CardData();
const id = initialData.map(card => {
  return card.id;
});

// const reducer = (state = initialState, action) => {
//   if (action.type === actionType.LIKE) {
//     console.log(action.payLoad);
//     if (!state.value) {
//       return {
//         ...state,
//         value: action.payLoad + 1
//       };
//     } else {
//       return {
//         ...state,
//         value: action.payLoad - 1
//       };
//     }
//   }

//   return state;
// };

const reducer = (state = initialState, action) => {
  const findArr = id.find(function(elem) {
    return elem === action.id;
  });
  if (action.type === "LIKE") {
    if (findArr && !state.value) {
      return { ...state, value: action.value + 1 };
    } else {
      return { ...state, value: action.value - 1 };
    }
  }
  return state;
};
export default reducer;
