import React, { useState, useEffect } from "react";
import Editprofile from "../components/mypage/EditProfile";
import FavoriteList from "../components/mypage/FavoriteList";
import FavoriteListMap from "../components/mypage/FavoriteListMap";

import MypageCategory from "../components/mypage/MypageCategory";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/configStore";
import { actionCreators } from "../redux/modules/favorite";
//image
// import restaurant from "../static/image/header_profile.svg";

const Mypage: React.FC = () => {
  const is_login = localStorage.getItem("token"); //임시토큰 테스트 나중에 없애거나 수정할것
  const dispatch = useDispatch();
  const [category, setCategory] = useState<string>("edit_profile");
  const info = useSelector((state: RootState) => state.favorite.list);

  useEffect(() => {
    // 모든 정보 get 요청 해서 redux 에 저장해놓기
    
    if (!info.nickname.length) {
      dispatch(actionCreators.getFavoriteListDB());
    }
  }, []);
  return (
    <div style={{margin:"13vh 0 0 0"}}>
      <MypageCategory setCategory={setCategory} category={category} />
      {category === "edit_profile" && <Editprofile nickname={info.nickname } is_login={is_login}/>}
      {category === "favorite_list" && <FavoriteList {...info} is_login={is_login}/>}
      {category === "favorite_list_map" && <FavoriteListMap {...info} is_login={is_login}/>}
    </div>
  );
};

export default Mypage;
