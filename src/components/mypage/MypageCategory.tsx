import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MypageCategoryType } from "../../types/interfaces";

//image
import my_info_tab from "../../static/image/my_info_tab.svg"
import favorite_tab from "../../static/image/favorite_list_tab.svg"
import my_map_tab from "../../static/image/my_map_tab.svg"
 interface clickedType {
  clicked: string
 }
  
const MypageCategory: React.FC<MypageCategoryType> = (props) => {
  const { setCategory, category } = props;

  return (
    <div
      style={{
        display: "flex",
        // color: "#E22F2F",
        // fontSize: "25px",
        // fontWeight: "bold",
        // justifyContent: "center",
        margin: "auto",
        width: "528px",
      }}
    >
      <Element onClick={() => setCategory("edit_profile")} clicked={category}>
       <img src={my_info_tab} alt="my_info"></img>
      </Element>
      <Element onClick={() => setCategory("favorite_list")} clicked={category}>
      <img src={favorite_tab} alt="my_info"></img>
      </Element>
      <Element
        onClick={() => setCategory("favorite_list_map")}
        clicked={category}
      >
        <img src={my_map_tab} alt="my_info"></img>
      </Element>
    </div>
  );
};

const Element = styled.div`
/* width:176px, */
  height: 53px;
  /* margin: 0 10px; */
  &:hover {
    cursor: pointer;
  }
  &:nth-child(1) {
    background-color: ${(props: clickedType) =>
      props.clicked === "edit_profile" ? "yellow" : "white"};
  }
  &:nth-child(2) {
    background-color: ${(props: clickedType) =>
      props.clicked === "favorite_list" ? "yellow" : "white"};
  }
  &:nth-child(3) {
    background-color: ${(props: clickedType) =>
      props.clicked === "favorite_list_map" ? "yellow" : "white"};
  }
`;

export default MypageCategory;
