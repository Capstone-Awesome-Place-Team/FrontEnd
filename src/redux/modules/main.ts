import { apis } from "../../shared/api/apis";
import { Dispatch } from "redux";
import { createAction } from "redux-actions";

//actions
const GET_THEME = "GETTHEME";
const GET_THEME_DETAIL = "GETTHEMEDETAIL";
const GET_SEARCH_RESULT = "SEARCHRESULT";
const RESULT_SAVED = "RESULTSAVED";
const RESTAURANT_DETAIL = "RESTAURANTDETAIL";

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
// const sortSearchResult= createAction(SORT_RESULT, (search_list:[])=>({search_list}));
const getSearchResult = createAction(GET_SEARCH_RESULT, (search_list: []) => ({
  search_list,
}));
const resultSave = createAction(RESULT_SAVED, (save_result: []) => ({
  save_result,
}));

const restaurantDetail = createAction(RESTAURANT_DETAIL, (detail: {}) => ({
  detail,
}));

const initialState = {
  // 회원이 가진 찜목록 및 닉네임
  list: [
    {
      theme_title: "",
      theme_img: "",
    },
  ],
  theme_detail: {
    
  },
  search_list: [],
  save_result: [],
  restaurant_detail: {},
  isLoading: true,
  isSearched: false,
  IsSaved: false,
};

const getThemeListDB = () => {
  // 메인 테마리스트 가져오기
  return async function (dispatch: Dispatch) {
    try {
      const res: any = await apis.getMain(); 
      // console.log(res);
      dispatch(getThemeList(res));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

const getResInfoDB = (r_code: string, setIsLoading:Function) => {
  return async function (dispatch: Dispatch) {
    try {
      const res: any = await apis.getResInfo(r_code); //나중에 서버 생기면 넣을것
      dispatch(restaurantDetail(res));
      setIsLoading(false);
      console.log(res);
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

const getThemeDetail = (theme_title: string, setIsLoading: Function) => {
  return async function (dispatch: Dispatch) {
    try {
      const res: any = await apis.getThemeDetail(theme_title); //나중에 서버 생기면 넣을것
      console.log(res);
      dispatch(getThemeDetailList(res));
      setIsLoading(false)
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

const postSearchDB = (search: string, navigate: Function) => {
  return async function (dispatch: Dispatch) {
    try {
      const res: any = await apis.postSearchInfo(search);
      console.log(res);
      dispatch(getSearchResult(res));
      navigate(`/list/${search}`);
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

const getSearchDB = (search: string) => {
  return async function (dispatch: Dispatch) {
    try {
      const res = await apis.getSearchInfo(search);
      dispatch(getSearchResult(res)); // 아직 연결 안됨 404 에러
      console.log(res);
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_THEME: {
      return { ...state, list: action.payload.list, isLoading: false };
    }
    case GET_THEME_DETAIL: {
      return { ...state, theme_detail: action.payload.list };
    }

    case GET_SEARCH_RESULT: {
      return {
        ...state,
        search_list: action.payload.search_list,
        isSearched: true,
      };
    }

    case RESULT_SAVED: {
      return {
        ...state,
        IsSaved: true,
        save_result: action.payload.save_result,
      };
    }

    case RESTAURANT_DETAIL: {
      return {
        ...state,
        restaurant_detail: action.payload.detail,
      };
    }
    default:
      return state;
  }
}

const actionCreators = {
  getThemeListDB,
  getThemeDetail,
  postSearchDB,
  getSearchDB,
  getResInfoDB,
  getSearchResult,
  resultSave,
};

export { actionCreators };
