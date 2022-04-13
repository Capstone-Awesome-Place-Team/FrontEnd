import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as favoriteActions } from "../redux/modules/favorite";

import header_profile from "../static/image/header_profile.svg";
import heart_fill from "../static/image/heart-fill.svg";
import { PostPropsType } from "../types/interfaces";

const Post: React.FC<PostPropsType> = (props) => {
  const dispatch = useDispatch();
  const cancelFavorite = () => {
    dispatch(favoriteActions.cancelFavoriteDB(props.r_code)); // 임시로 해당 레스토랑 이름(restaurant_name)을 사용하고 api 요청에서 받는 r_code로 나중에 수정
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "493px",
      }}
    >
      <img src={props.img} alt="restaurant" width="100px" height="100px"></img>
      <div className="content" style={{ margin: "0 14px" }}>
        <div
          className="restaurant_name"
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}
        >
          {props.restaurant_name}
        </div>
        <div
          className="address"
          style={{
            width: "300px",
            color: "#9C9C9C",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          {props.address}
        </div>
      </div>
      <div className="like" style={{ display: "flex", alignItems: "center" }}>
        <img src={heart_fill} alt="heart" onClick={cancelFavorite} />
      </div>
    </div>
  );
};

export default Post;
