import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Favorite from "./modules/favorite";
import User from "./modules/users";
import Main from "./modules/main";

const rootReducer = combineReducers({ favorite: Favorite, user: User, main: Main });

export type RootState = ReturnType<typeof rootReducer>;
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
