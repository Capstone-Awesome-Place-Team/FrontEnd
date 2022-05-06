import { apis } from "../../shared/api/apis";
import { Dispatch } from "redux";
import { createAction } from "redux-actions";
// import { useNavigate } from "react-router-dom";
import { SetUser, Signup } from "../../types/interfaces";

//actions

const SET_USER = "SETUSER";
// const LOG_OUT ="LOGOUT";

//action creators

const set_user = createAction(SET_USER, (user: SetUser) => ({ user }));
// const log_out= createAction(LOG_OUT,)
//init
const initialState = {
  user: {},
};

//Middleware
const SignUpDB = (user: Signup, navigate: Function) => {
  return async function (dispatch: Dispatch) {
    try {
      console.log(user);
      const res= await apis.signUp(user); // api생기면 넣기
      navigate("/signin"); //회원가입완료후 로그인화면으로
    } catch (error) {
      console.log(error);
    }
  };
};

const LoginDB = (user: SetUser, navigate: Function) => {
  return async function (dispatch: Dispatch) {
    try {
      console.log(user);
       const res:any = await apis.setUser(user); // api생기면 넣기
       localStorage.setItem("token", res.token) // 임시 토큰생성 나중에 없애면됨
      dispatch(set_user(user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
};

const Logout =(navigate:Function)=>{
  localStorage.removeItem("token");
  navigate("/");
}
//Reducer

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_USER: {
      return { ...state, user: action.payload.user };
    }
    default:
      return state;
  }
}

export const actionCreators = {
  SignUpDB,
  LoginDB,
  Logout
};
