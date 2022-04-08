import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Favorite from "./modules/favorite";
import User from "./modules/users";

const rootReducer = combineReducers({ favorite: Favorite, user: User });

export type RootState = ReturnType<typeof rootReducer>;
const Middlewares = [thunk];
const enhancer = applyMiddleware(...Middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
