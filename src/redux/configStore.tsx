import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Favorite from "./modules/favorite";
import User from "./modules/users";
import Main from "./modules/main";
import Restaurant from "./modules/restaurant"

const rootReducer = combineReducers({ favorite: Favorite, user: User, main: Main, restaurant:Restaurant });

export type RootState = ReturnType<typeof rootReducer>;  //리턴타입이 무엇인지 결정하는데 그것을 typeof 를 사용해서 다시한번찾아서 넣어준다.
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
