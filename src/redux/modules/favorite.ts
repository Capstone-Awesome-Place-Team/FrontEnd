
import { apis } from "../../shared/api/apis";
import { Dispatch } from "redux";
import { FavoritePropsType } from "../../types/interfaces";
import { dummyfiles } from "../../shared/dummy";



//actions
console.log(dummyfiles)
const GET_FAVORITELIST = "GETFAVORITELIST";

//action creators
// const getFavoriteList = createAction(GET_FAVORITELIST, (list:{}) => ({ list })); // list이름은 일단 넣어놓고 다른 변수로 일치해야하면 다시바꿀것
const getFavoriteList = (list: any) => ({
  type: GET_FAVORITELIST,
  list,
});
// initial values

const initialState = {
  // 회원이 가진 찜목록 및 닉네임
  list: {
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
  },
};

//MiddleWare

const getFavoriteListDB = () => {
  // 내 찜목록 리스트 가져오기

  return async function (dispatch: Dispatch) {
    try {
      // const res = await apis.getFavorite(); //나중에 서버 생기면 넣을것
      dispatch(
        getFavoriteList(dummyfiles)
      );
    } catch (error) {
      console.log(error);
    }
  };
};

//Reducer

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_FAVORITELIST: {
      return { ...state, list: action.list };
    }
    default:
      return state;
  }
}

const actionCreators = {
  getFavoriteListDB,
};

export { actionCreators };