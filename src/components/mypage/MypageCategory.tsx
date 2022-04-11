import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MypageCategoryType } from "../../types/interfaces";

//image
import my_info_tab from "../../static/image/my_info_tab.svg";
import my_info_red from "../../static/image/my_info_red.svg";
import favorite_tab from "../../static/image/favorite_list_tab.svg";
import favorite_red from "../../static/image/favorite_red.svg";
import my_map_tab from "../../static/image/my_map_tab.svg";
import mymap_red from "../../static/image/mymap_red.svg";
interface clickedType {
  clicked: string;
}

const MypageCategory: React.FC<MypageCategoryType> = (props) => {
  const { setCategory, category } = props;

  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        width: "528px",
      }}
    >
      <Element onClick={() => setCategory("edit_profile")} clicked={category}>
        <img
          src={category === "edit_profile" ? my_info_red : my_info_tab}
          alt="my_info"
        ></img>
      </Element>
      <Element onClick={() => setCategory("favorite_list")} clicked={category}>
        <img
          src={category === "favorite_list" ? favorite_red : favorite_tab}
          alt="my_favorite"
        ></img>
      </Element>
      <Element
        onClick={() => setCategory("favorite_list_map")}
        clicked={category}
      >
        <img
          src={category === "favorite_list_map" ? mymap_red : my_map_tab}
          alt="my_map"
        ></img>
      </Element>
    </div>
  );
};
//나중에 위에 Element와 img 부분 컴포넌트로 뺄수있으면 뺄것
const Element = styled.div`
  height: 53px;
  &:hover {
    cursor: pointer;
  }
  &:nth-child(1) {
  }
  &:nth-child(2) {
    /* background-color: ${(props: clickedType) =>
      props.clicked === "favorite_list" ? "yellow" : "white"}; */
  }
  &:nth-child(3) {
    /* background-color: ${(props: clickedType) =>
      props.clicked === "favorite_list_map" ? "yellow" : "white"}; */
  }
`;

export default MypageCategory;
