import React, { useRef, useEffect, ReactEventHandler } from "react";
import styled from "styled-components";
import { FavoritePropsType } from "../../types/interfaces";
import Post from "../Post";
import AreaInclude from "./AreaInclude";
import map from "../../static/image/map.svg";
import mark from "../../static/image/mark.svg";
import { disconnect } from "process";
const FavoriteListMap: React.FC<FavoritePropsType> = (props) => {
  const dummyArea = [ // 실제 데이터가 생기면 이거 지우고 쓸것 대신 추가해야할게 split 으로 주소 나눠서 찾아야할듯
    "은평구",
    "강북구",
    "도봉구",
    "노원구",
    "강서구",
    "성북구",
    "서대문구",
    "마포구",
    "용산구",
    "중구",
    "동대문구",
    "성동구",
    "중랑구",
    "광진구",
    "양천구",
    "영등포구",
    "동작구",
    "금천구",
    "관악구",
    "서초구",
    "강남구",
    "송파구",
    "강동구",
    "종로구",
    "구로구"
  ];
 
 
  return (
    <Container>
      {props.is_login ? (
        <div>
          <div
            style={{
              backgroundImage: `url(${map})`,
              backgroundSize: "400px 325px",
              width: "400px",
              height: "325px",
              margin: "auto",
            }}
          >
            <AreaInclude dummyArea={dummyArea}></AreaInclude>
          </div>

          <ListBox>
            <ScrollBarBox>
              {props.like_list.map((item) => {
                return (
                  <React.Fragment key={item.r_code}>
                    <Post {...item} isMap />
                  </React.Fragment>
                );
              })}
            </ScrollBarBox>
          </ListBox>
        </div>
      ) : (
        `로그인후 이용 가능합니다.`
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 528px;
  height: 75vh;
  /* text-align: center; */
  border: 2px solid #747474;
  border-top: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  border-radius: 0 0 20px 20px;
  // padding: "5px",
  margin: auto;
`;

const ListBox = styled.div`
  border: 1px solid #c4c4c4;
  width: 480px;
  height: 190px;
  margin: auto;
  border-radius: 10px;
`;
const ScrollBarBox = styled.div`
  margin: 5px 0;
  width: 475px;
  height: 180px;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 9px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #bebebe;
    height: 53px;
    border-radius: 4.5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #ededed;
    border-radius: 4.5px;
  }
`;

const ImgWrap = styled.div`
  padding: 20px;
  text-align: center;
`;
export default FavoriteListMap;
