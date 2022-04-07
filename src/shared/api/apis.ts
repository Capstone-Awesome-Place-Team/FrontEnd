import instance from "./instance";

export const apis ={
    // Mypage Favorite 
    getFavorite : ()=> instance.get(`/mypage`),
}