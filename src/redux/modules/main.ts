import { apis } from "../../shared/api/apis";
import { Dispatch } from "redux";
import { createAction } from "redux-actions";

//actions
const GET_THEME = "GETTHEME";
const GET_THEME_DETAIL = "GETTHEMEDETAIL";
const getThemeList = createAction(
  GET_THEME,
  (list: { theme_title: string; theme_img: string }[]) => ({ list })
); // list이름은 일단 넣어놓고 다른 변수로 일치해야하면 다시바꿀것
const getThemeDetailList = createAction(
  GET_THEME_DETAIL,
  (list: {
    theme_title: string;
    theme_content: string;
    restaurant_info: [];
  }) => ({ list })
);

const initialState = {
  // 회원이 가진 찜목록 및 닉네임
  list: [
    {
      theme_title: "",
      theme_img: "",
    },
  ],
  theme_detail: {
    theme_title: "",
    theme_content: "",
    restaurant_info: [
      {
        r_code: null,
        restaurant_name: "",
        img: "",
        intro: "",
        options: {
          takeout: null,
          parking: null,
        },
        star: null,
      },
    ],
  },
  isLoading:true,
};

const getThemeListDB = () => {
  // 메인 테마리스트 가져오기
  return async function (dispatch: Dispatch) {
    try {
      const res: any = await apis.getMain(); //나중에 서버 생기면 넣을것
      console.log(res);
      dispatch(getThemeList(res));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

const getThemeDetail = (theme_title: string) => {
  return async function (dispatch: Dispatch) {
    try {
      const res: any = await apis.getThemeDetail(theme_title); //나중에 서버 생기면 넣을것
      console.log(res);
      dispatch(getThemeDetailList(res));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

const getSearchDB = (search:string, navigate:Function)=>{
  return async function (dispatch:Dispatch){
    try{
      const res:any = await apis.getSearchInfo(search);
      navigate(`/list/${search}`)
    } catch (error:any){
      console.log(error.message);
    }
  }
}

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_THEME: {
      return { ...state, list: action.payload.list,isLoading:false };
    }
    case GET_THEME_DETAIL: {
      return {...state, theme_detail: action.payload.list, };
    }
    default:
      return state;
  }
}

const actionCreators = {
  getThemeListDB,
  getThemeDetail,
  getSearchDB
};

export { actionCreators };
