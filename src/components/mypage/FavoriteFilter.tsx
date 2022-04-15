import React, { useState } from "react";
import styled from "styled-components";

import arrow_drop from "../../static/image/arrow-dropdown.svg";
const FavoriteFilter: React.FC<{
  selected: string;
  setSelected: Function;
  setPageCount: Function;
  isActive: boolean;
  setActive: Function;
}> = (props) => {
  const { selected, setSelected, setPageCount, isActive, setActive } = props;

  const district = [
    "전체",
    "종로구",
    "중구",
    "용산구",
    "성동구",
    "광진구",
    "동대문구",
    "중랑구",
    "성북구",
    "강북구",
    "도봉구",
    "노원구",
    "은평구",
    "서대문구",
    "마포구",
    "양천구",
    "강서구",
    "구로구",
    "금천구",
    "영등포구",
    "동작구",
    "관악구",
    "서초구",
    "강남구",
    "송파구",
    "강동구",
  ];

  const selectOne = (item: string) => {
    setSelected(item);
    setActive(!isActive);
    setPageCount(0);
  };

  return (
    <div
      style={{
        width: "fit-content",
        position: "relative",
        // zIndex: "2",
        color: "black",
        margin: "0 20px",
      }}
    >
      <div
        onClick={() => setActive(!isActive)}
        style={{
          display: "flex",
          border: "1px solid black",
          width: "100px",
          height: "30px",
          borderRadius: "10px",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "15px",
        }}
      >
        <span style={{ margin: "0 20px" }}>{selected}</span>
        <img
          src={arrow_drop}
          alt="arrow"
          style={{ justifyContent: "end" }}
        ></img>
      </div>
      <Ul className="dept01" isActive={isActive}>
        {district.map((item, idx) => (
          <li
            key={idx}
            id="nop"
            style={{ borderBottom: "1px solid #9C9C9C", padding: "6px 0" }}
            onClick={() => selectOne(item)}
          >
            {item}
          </li>
        ))}
      </Ul>
    </div>
  );
};

const Ul = styled.ul`
  background: white;
  width: 100px;
  list-style: none;
  border: 1px solid #9c9c9c;
  border-radius: 10px;
  height: 150px;
  text-align: center;
  overflow-y: auto;
  display: ${(props: { isActive: boolean }) =>
    props.isActive ? "block" : "none"};
  // zIndex:"2",
  position: absolute;
  font-size: 15px;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default FavoriteFilter;
