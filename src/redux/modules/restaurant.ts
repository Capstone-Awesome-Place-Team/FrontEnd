import { apis } from "../../shared/api/apis";
import { Dispatch } from "redux";
import { createAction } from "redux-actions";

const LIKE_FAVORITE = "LIKEFAVORITE";
const RESTAURANT_DETAIL = "RESTAURANTDETAIL";
const CANCEL_FAVORITE = "CANCELFAVORITE";

const likeFavorite = createAction(LIKE_FAVORITE, (r_code:number)=>({r_code}))
const restaurantDetail = createAction(RESTAURANT_DETAIL, (detail: {}) => ({
    detail,
  }));
  const cancelFavorite = createAction(CANCEL_FAVORITE, ()=>({}))

const initialState = {
  address: "",
  comments: [],
  img_list: [],
  like: false,
  mycomment: {
    star: 0, title: '', content: '', time: ''
  },
  options: {takeout: false, parking: true},
  price: null,
  r_code: null,
  restaurant_name: "",
  star: 0,
}

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

const likeFavoriteDB = (r_code:number)=>{
    return async function (dispatch:Dispatch){
      try{
        const res = await apis.likeFavorite(r_code);
        dispatch(likeFavorite(r_code));
        console.log(res);
      } catch(error){
        console.log(error);
      }
    }
  }
  const cancelFavoriteDB = (r_code:number) => {
    console.log()
    return async function (dispatch: Dispatch) {
      try {
        const res = await apis.cancelFavorite(r_code) 
        dispatch(cancelFavorite());
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
  };

export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case LIKE_FAVORITE:{
            return {...state,like:true  }
          }
          case RESTAURANT_DETAIL: {
            return {
              ...action.payload.detail,
            };
          }
          case CANCEL_FAVORITE:{
            return {
              ...state, like:false
            }
          }
     
      default:
        return state;
    }
  }

  export const actionCreators ={
    likeFavoriteDB,
    getResInfoDB,
    cancelFavoriteDB
  }