import { apis } from "../../shared/api/apis";
import { Dispatch } from "redux";
import { createAction } from "redux-actions";
import { RestaurantType } from "../../types/interfaces";
const LIKE_FAVORITE = "LIKEFAVORITE";
const RESTAURANT_DETAIL = "RESTAURANTDETAIL";
const CANCEL_FAVORITE = "CANCELFAVORITE";
const ADD_COMMENT = "ADDCOMMENT";
const DELETE_RESTAURANT = "DELETERESTAURANT"
const likeFavorite = createAction(LIKE_FAVORITE, (r_code: number) => ({
  r_code,
}));
const addComment = createAction(
  ADD_COMMENT,
  (comments: { star: number; title: string; content: string }) => ({ comments })
);
const restaurantDetail = createAction(RESTAURANT_DETAIL, (detail: {}) => ({
  detail,
}));
const cancelFavorite = createAction(CANCEL_FAVORITE, () => ({}));
const deleteRestaurantInfo = createAction(DELETE_RESTAURANT,()=>({}))

const initialState: RestaurantType = {
  address: "",
  comments: [],
  img_list: [],
  like: false,
  mycomment: {
    star: 0,
    title: "",
    content: "",
    time: "",
  },
  options: { takeout: false, parking: true },
  price: 0,
  r_code: 0,
  restaurant_name: "",
  star: 0,
};

const getResInfoDB = (r_code: string) => {
  return async function (dispatch: Dispatch) {
    try {
      const res: any = await apis.getResInfo(r_code); //나중에 서버 생기면 넣을것
      dispatch(restaurantDetail(res));
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

const likeFavoriteDB = (r_code: number) => {
  return async function (dispatch: Dispatch) {
    try {
      const res = await apis.likeFavorite(r_code);
      dispatch(likeFavorite(r_code));
    } catch (error) {
      console.log(error);
    }
  };
};
const cancelFavoriteDB = (r_code: number) => {
  return async function (dispatch: Dispatch) {
    try {
      const res = await apis.cancelFavorite(r_code);
      dispatch(cancelFavorite());
    } catch (error) {
      console.log(error);
    }
  };
};

const addReviewDB = (
  comments: { star: number; title: string; content: string },
  r_code: number
) => {
  return async function (dispatch: Dispatch) {
    try {
      const res = await apis.addComment(r_code, comments);
      document.location.reload();
      // dispatch(addComment(comments)); //새로고침을 하기때문에 없앰
    } catch (error) {
      console.log(error);
    }
  };
};




export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case LIKE_FAVORITE: {
      return { ...state, like: true };
    }
    case RESTAURANT_DETAIL: {
      return {
        ...action.payload.detail,
      };
    }
    case CANCEL_FAVORITE: {
      return {
        ...state,
        like: false,
      };
    }
    case ADD_COMMENT: {
      return {
        ...state,
        mycomment: { ...action.payload.comments },
        comments: [...state.comments, action.payload.comments],
      };
    }
    case DELETE_RESTAURANT:{
      return{
        address: "",
        comments: [],
        img_list: [],
        like: false,
        mycomment: {
          star: 0,
          title: "",
          content: "",
          time: "",
        },
        options: { takeout: false, parking: true },
        price: 0,
        r_code: 0,
        restaurant_name: "",
        star: 0,
      }
    }

    default:
      return state;
  }
}

export const actionCreators = {
  likeFavoriteDB,
  getResInfoDB,
  cancelFavoriteDB,
  addReviewDB,
  deleteRestaurantInfo
};
