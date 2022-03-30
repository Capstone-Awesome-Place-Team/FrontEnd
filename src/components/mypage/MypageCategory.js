import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MypageCategory = (props) => {
  const { setCategory, category } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Element onClick={() => setCategory("edit_profile")} clicked={category}>
        내 정보
      </Element>
      <Element onClick={() => setCategory("favorite_list")} clicked={category}>
        내 찜 목록
      </Element>
      <Element
        onClick={() => setCategory("favorite_list_map")}
        clicked={category}
      >
        나만의 맛집 지도
      </Element>
    </div>
  );
};

const Element = styled.div`
  margin: 0 10px;
  color: #e22f2f;
  font-size: 25px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
  &:nth-child(1) {
    background-color: ${(props) =>
      props.clicked === "edit_profile" ? "yellow" : "white"};
  }
  &:nth-child(2) {
    background-color: ${(props) =>
      props.clicked === "favorite_list" ? "yellow" : "white"};
  }
  &:nth-child(3) {
    background-color: ${(props) =>
      props.clicked === "favorite_list_map" ? "yellow" : "white"};
  }
`;

export default MypageCategory;
