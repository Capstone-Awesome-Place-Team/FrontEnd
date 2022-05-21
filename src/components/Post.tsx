import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as favoriteActions } from "../redux/modules/favorite";
import styled from "styled-components";
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
        // justifyContent: props.isMap?"":"center",
        width: "493px",
        margin: "10px 10px",
      }}
    >
      <PostImg src={props.img} alt="restaurant" isMap={props.isMap}></PostImg>
      <div className="content" style={{ margin: "0 14px" }}>
        <RestaurantName className="restaurant_name" isMap={props.isMap}>
          {props.restaurant_name}
        </RestaurantName>
        <Address className="address">{props.address}</Address>
      </div>
      {props.isMap ? null : (
        <div className="like" style={{ display: "flex", alignItems: "center" }}>
          <HeartImg src={heart_fill} alt="heart" onClick={cancelFavorite} />
        </div>
      )}
    </div>
  );
};

const PostImg = styled.img`
  width: ${(props: { isMap: boolean }) => (props.isMap ? `74px` : `100px`)};
  height: ${(props: { isMap: boolean }) => (props.isMap ? `74px` : `100px`)};
  @media (max-width: 576px) {
    width: ${(props: { isMap: boolean }) => (props.isMap ? `50px` : `71px`)};
    height: ${(props: { isMap: boolean }) => (props.isMap ? `50px` : `71px`)};
  }
`;
const RestaurantName = styled.div`
  font-size: ${(props: { isMap: boolean }) => (props.isMap ? "15px" : "20px")};
  font-weight: bold;
  margin-bottom: 10px;
  @media (max-width: 576px) {
    font-size: 15px;
  }
`;
const Address = styled.div`
  width: 300px;
  color: #9c9c9c;
  font-size: 15px;
  font-weight: bold;
  @media (max-width: 576px) {
    width: 200px; //
  }
`;
const HeartImg = styled.img`
  @media (max-width: 576px) {
    width: 27px;
    height: 25px;
  }
`;
export default Post;
