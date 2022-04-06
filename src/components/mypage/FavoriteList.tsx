import React, { useState, useEffect } from "react";
import { FavoritePropsType } from "../../types/interfaces";
import Post from "../Post";
const FavoriteList: React.FC<FavoritePropsType> = (props) => {
  console.log(props)
  const [exampleData, setExampleData] = useState(props); // 나중에 api로 데이터 받아오면 그값들 넣어주기, 그리고 이 샘플 useState는 나중에 지우기
   //useSelector 로 내찜목록 정보 가져오기
   //스피너 처리 나중에할것
  const list = exampleData.like_list;
  
  return (
    <div style={{ border: "1px solid black" }}>
      {list.map((data, idx) => (
        <Post key={idx} {...data} />
      ))}
    </div>
  );
};

export default FavoriteList;
