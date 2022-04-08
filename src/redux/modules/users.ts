import { apis } from "../../shared/api/apis";
import { Dispatch } from "redux";
import { createAction } from "redux-actions";

import { SetUser, Signup } from "../../types/interfaces";

//actions

const SET_USER = "SETUSER";

//action creators

const set_user = createAction(SET_USER, (user: SetUser) => ({ user }));

//init
const initialState = {
  user: {},
};

//Middleware

const SignUpDB = (user: Signup) => {
  return function (dispatch: Dispatch) {
    try {
      console.log(user);
      // const res = apis.signUp(user); // api생기면 넣기
    } catch (error) {
      console.log(error);
    }
  };
};

const LoginDB = (user: SetUser) => {
  return function (dispatch: Dispatch) {
    try {
      console.log(user);
      //  const res = apis.setUser(user); // api생기면 넣기
      dispatch(set_user(user));
    } catch (error) {
      console.log(error);
    }
  };
};
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
};
