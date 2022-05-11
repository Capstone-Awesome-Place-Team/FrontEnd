import { apis } from "../../shared/api/apis";
import { Dispatch } from "redux";
import { createAction } from "redux-actions";
import { FavoritePropsType } from "../../types/interfaces";

import { dummyfiles } from "../../shared/dummy";
import { Edit_info } from "../../types/interfaces";
//actions

const GET_FAVORITELIST = "GETFAVORITELIST";
const CANCEL_FAVORITE = "CANCELFAVORITE";
const EDIT_INFO = "EDITINFO";
const REMOVE_INFO= "REMOVEINFO"
//action creators
const getFavoriteList = createAction(
  GET_FAVORITELIST,
  (list: FavoritePropsType) => ({ list })
); // list이름은 일단 넣어놓고 다른 변수로 일치해야하면 다시바꿀것
const cancelFavorite = createAction(CANCEL_FAVORITE, (r_code: number) => ({
  r_code,
}));

const editInfo = createAction(EDIT_INFO, (nickanme: string) => ({ nickanme }));
const removeInfo = createAction(REMOVE_INFO, ()=>({}))
// const getFavoriteList = (list: any) => ({
//   type: GET_FAVORITELIST,
//   list,
// });

// initial values
const initialState = {
  // 회원이 가진 찜목록 및 닉네임
  list: {
    nickname: "",
    like_list: [
      {
        r_code: 0,
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
      const res:any = await apis.getFavorite(); //나중에 서버 생기면 넣을것
      // dispatch(getFavoriteList(dummyfiles));
      console.log(res);
      dispatch(getFavoriteList(res));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

const cancelFavoriteDB = (r_code: number) => {
  console.log(r_code)
  return async function (dispatch: Dispatch) {
    try {
      const res = await apis.cancelFavorite(r_code) //나중에 api 요청시 사용
      dispatch(cancelFavorite(r_code));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
};

const editInfoDB = (info: {
  pw: string | undefined;
  nickname: string | undefined;
}) => {
  // |undefined 부분 수정할수있는지 나중에 검토, 하고 apis도 동일하게 검토
  return async function (dispatch: Dispatch) {
    try {
       const res = await apis.editInfo(info);    //api 연결 추가
      dispatch(editInfo(info.nickname));
    } catch (error) {
      console.log(error);
    }
  };
};

const RemoveInfo:any =()=>{
  return async function (dispatch:Dispatch){
    dispatch(removeInfo())
  }
}

//Reducer

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_FAVORITELIST: {
      return { ...state, list: action.payload.list };
    }
    case CANCEL_FAVORITE: {
      const NewFavoriteList = state.list.like_list.filter((old) => {
        return old.r_code !== action.payload.r_code;
      });

      return { list: { ...state.list, like_list: NewFavoriteList } };
    }
    case EDIT_INFO: {
      console.log(action.payload.nickanme);
      return { list: { ...state.list, nickname: action.payload.nickanme } };
    }
    case REMOVE_INFO:{
      return { list:{nickname: "",
      like_list: [
        {
          r_code: 0,
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
      ],}}
    }
    default:
      return state;
  }
}

const actionCreators = {
  getFavoriteListDB,
  cancelFavoriteDB,
  editInfoDB,
  RemoveInfo
};

export { actionCreators };
