import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Favorite from "./modules/favorite";

const rootReducer = combineReducers({ favorite : Favorite });

export type RootState = ReturnType<typeof rootReducer>

const Middlewares = [thunk];
const enhancer = applyMiddleware(...Middlewares);
const store = createStore(rootReducer,enhancer);

export default store;