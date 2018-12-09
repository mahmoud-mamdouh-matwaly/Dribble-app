const initialState = {
  data: [
    {
      id: "1",
      name: "mahmoud",
      urlPng: "images/list1.png",
      urlWeb: "images/list1.webp",
      subTitle: "mahmoud design level up",
      description: "lorem tree one",
      likeCount: 0
    },
    {
      id: "2",
      name: "ahmed",
      urlPng: "images/list2.png",
      urlWeb: "images/list2.webp",
      subTitle: "ahmed design level up",
      description: "lorem tree tow",
      likeCount: 0
    },
    {
      id: "3",
      name: "mohamed",
      urlPng: "images/list3.png",
      urlWeb: "images/list3.webp",
      subTitle: "mohamed design level up",
      description: "lorem tree three",
      likeCount: 0
    },
    {
      id: "4",

      name: "ayman",
      urlPng: "images/list4.png",
      urlWeb: "images/list4.webp",
      subTitle: "ayman design level up",
      description: "lorem tree four",
      likeCount: 0
    },
    {
      id: "5",

      name: "mustafa",
      urlPng: "images/list5.png",
      urlWeb: "images/list5.webp",
      subTitle: "mustafa design level up",
      description: "lorem tree five",
      likeCount: 0
    },
    {
      id: "6",
      name: "mamdouh",
      urlPng: "images/list6.png",
      urlWeb: "images/list6.webp",
      subTitle: "mamdouh design level up",
      description: "lorem tree six",
      likeCount: 0
    },
    {
      id: "7",
      name: "Ahmed",
      urlPng: "images/list1.png",
      urlWeb: "images/list1.webp",
      subTitle: "Ahmed design level up",
      description: "lorem tree six",
      likeCount: 0
    },
    {
      id: "8",
      name: "salah",
      urlPng: "images/list2.png",
      urlWeb: "images/list2.webp",
      subTitle: "salah design level up",
      description: "lorem tree six",
      likeCount: 0
    }
  ]
};

const reducer = (state = initialState, action) => {
  const findUser = state.data.find(function(elem) {
    return elem.id === action.id;
  });
  if (action.type === "LIKE") {
    let newState = [...state.data];
    const chosenUser = newState.find(function(elem) {
      return elem.id === action.id;
    });
    chosenUser.likeCount = findUser.likeCount + 1;
    console.log(chosenUser);

    newState = {
      ...newState,
      chosenUser
    };
    if (findUser) {
      return {
        ...state,
        ...state.data,
        ...newState
      };
    } else {
      return { ...state, value: action.value - 1 };
    }
  }
  return state;
};
export default reducer;
