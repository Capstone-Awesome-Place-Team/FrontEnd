import React from "react";
import styled from "styled-components";

const MypageCategory = (props) => {
  const { setCategory } = props;
  return (
    <div
      style={{
        display: "flex",
        color: "#E22F2F",
        fontSize: "25px",
        fontWeight: "bold",
        justifyContent: "center",
      }}
    >
      <Element onClick={() => setCategory("edit_profile")}>
        내 정보
      </Element>
      <Element onClick={() => setCategory("favorite_list")}>내 찜 목록</Element>
      <Element onClick={() => setCategory("favorite_list_map")}>
        나만의 맛집 지도
      </Element>
    </div>
  );
};

const Element = styled.div`
  margin: 0 10px;
`;

export default MypageCategory;
