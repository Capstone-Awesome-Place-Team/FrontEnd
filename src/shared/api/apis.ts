import instance from "./instance";
import { SetUser, Signup } from "../../types/interfaces";
export const apis = {
  // Mypage Favorite
  getFavorite: () => instance.get(`/mypage`),
  // Cancel Favorite
  cancelFavorite: (r_code: number) =>
    instance.delete(`/like`, { data: { r_code } }), // delete는 보통 body가 비어있고 params로 넘겨주는데 헤더에 많은 정보를 담을수 없을때 이런식으로 사용
  //like Favorite
  likeFavorite: (r_code:number)=> instance.post(`/like`, {r_code}),
  //add review
  addComment : (r_code:number, comments:{star:number, title:string, content:string})=> instance.post(`/write`,{r_code,comments}) ,
  //EditInfo
  editInfo: (info: { pw: string | undefined; nickname: string | undefined }) =>
    instance.put(`/user_edit`, { ...info }),
  //Signup
  signUp: (user: Signup) => instance.post(`/signup`, { ...user }),
  //Login
  setUser: (user: SetUser) => instance.post(`/signin`, { ...user }),
  //Main
  getMain: () => instance.get(`/main`),
  //theme Detail
  getThemeDetail: (theme_title:string)=> instance.get(`/theme_list/${theme_title}`),
  //search result
  postSearchInfo: (search:string)=>instance.post(`/search`,{ search }),
  //reset search page and get same search result
  getSearchInfo:(search:string)=>instance.get(`/list/${search}`),
  //get resto's detail info
  getResInfo: (r_code:string)=> instance.get(`/restaurant/${r_code}`),

};
