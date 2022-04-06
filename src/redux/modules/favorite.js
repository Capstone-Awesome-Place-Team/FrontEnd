import { createAction, handleActions } from "redux-actions";

//actions

const GET_FAVORITELIST = "GETFAVORITELIST";

//action creators
// const getFavoriteList = createAction(GET_FAVORITELIST, (list) => ({ list })); // list이름은 일단 넣어놓고 다른 변수로 일치해야하면 다시바꿀것
const getFavoriteList = (list) => ({type:GET_FAVORITELIST, list})
// initial values

const initialState = {
    list:{
        nickname: "",
        like_list: [
          {
            restaurant_name: "",
            img: "",
            address: "",
            star: 0,
            options: {
              takeout: true,
              parking: false,
              pet: false,
              nokids: false,
            },
          },
        ],
    }
        
      
};

//MiddleWare

//Reducer

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_FAVORITELIST: {
      return { ...state, list: action.list };
    }
    default: return state;
  }
}

const actionCreators = {
  getFavoriteList,
};

export { actionCreators };
