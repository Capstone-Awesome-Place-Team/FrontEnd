import React, { useState, useEffect } from "react";
import Editprofile from "../components/mypage/EditProfile";
import FavoriteList from "../components/mypage/FavoriteList";
import FavoriteListMap from "../components/mypage/FavoriteListMap";

import MypageCategory from "../components/mypage/MypageCategory";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/configStore";
import { actionCreators } from "../redux/modules/favorite";
//image
import restaurant from "../static/image/header_profile.svg";

const Mypage: React.FC = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState<string>("edit_profile");
  const info = useSelector((state: RootState) => state.favorite.list);
  console.log(info);
  useEffect(() => {
    // 모든 정보 get 요청 해서 redux 에 저장해놓기
    if (!info.length) {
      dispatch(actionCreators.getFavoriteListDB());
    }
  }, []);
  return (
    <div>
      <MypageCategory setCategory={setCategory} category={category} />
      {category === "edit_profile" && <Editprofile nickname={info.nickname }/>}
      {category === "favorite_list" && <FavoriteList {...info} />}
      {category === "favorite_list_map" && <FavoriteListMap {...info} />}
    </div>
  );
};

export default Mypage;
