import instance from "./instance";
import {SetUser,Signup} from '../../types/interfaces'
export const apis ={
    // Mypage Favorite 
    getFavorite : ()=> instance.get(`/mypage`),

    //Signup
    signUp : (user:Signup) => instance.post(`/signup`, {user}),
    //Login
    setUser : (user:SetUser) => instance.post(`/signin`, {user}),
}