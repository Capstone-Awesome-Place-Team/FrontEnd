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
      <Container onClick={() => setActive(!isActive)}>
        <Span>{selected}</Span>
        <img src={arrow_drop} alt="arrow"></img>
      </Container>
      <Ul isActive={isActive}>
        {district.map((item, idx) => (
          <List key={idx} onClick={() => selectOne(item)}>
            {item}
          </List>
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
  :hover {
    cursor: pointer;
  }
`;
const Container = styled.div`
  display: flex;
  border: 1px solid black;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  :hover {
    cursor: pointer;
  }
`;
const Span = styled.span`
  width: 100px;
  text-align: center;
  padding: 0 0 0 20px;
`;
const List = styled.li`
  border-bottom: 1px solid #9c9c9c;
  padding: 6px 0;
`;

export default FavoriteFilter;
