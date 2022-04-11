import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { FavoritePropsType } from "../../types/interfaces";
import Post from "../Post";
const FavoriteList: React.FC<FavoritePropsType> = (props) => {
  console.log(props);
  const [exampleData, setExampleData] = useState(props); // 나중에 api로 데이터 받아오면 그값들 넣어주기, 그리고 이 샘플 useState는 나중에 지우기
  //useSelector 로 내찜목록 정보 가져오기
  //스피너 처리 나중에할것
  const list = exampleData.like_list;

  return (
    <Container>
      {list.map((data, idx) => (
        <Post key={idx} {...data} />
      ))}
    </Container>
  );
};

const Container = styled.div`
   width: 528px;
        height: 75vh;
        text-align: center;
        border: 2px solid #747474;
        border-top: none;
        box-shadow: 0 4px 4px rgba(0,0,0,0.25);
         /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
        border-radius:0 0 20px 20px;
        // padding: "5px",
        margin: auto;
`
export default FavoriteList;
