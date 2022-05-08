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
        justifyContent:"center",
        // width: "720px",
      }}
    >
      <Element onClick={() => setCategory("edit_profile")} clicked={category}>
        <Img
          src={category === "edit_profile" ? my_info_red : my_info_tab}
          alt="my_info"
        ></Img>
      </Element>
      <Element onClick={() => setCategory("favorite_list")} clicked={category}>
        <Img
          src={category === "favorite_list" ? favorite_red : favorite_tab}
          alt="my_favorite"
        ></Img>
      </Element>
      <Element
        onClick={() => setCategory("favorite_list_map")}
        clicked={category}
      >
        <Img
          src={category === "favorite_list_map" ? mymap_red : my_map_tab}
          alt="my_map"
        ></Img>
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
`;

const Img = styled.img`
width:100%;
   /* @media (max-width: 576px) {
    width:120px;
  } */
`

export default MypageCategory;
