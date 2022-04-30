import React, { useRef, useEffect, ReactEventHandler, useState } from "react";
import styled from "styled-components";
import { FavoritePropsType } from "../../types/interfaces";
import Post from "../Post";
import AreaInclude from "./AreaInclude";
import map from "../../static/image/map.svg";

const FavoriteListMap: React.FC<FavoritePropsType> = (props) => {
  const [selectedArea, setSelectedArea] = useState<any>([]);
  const includedArea: string[] = [];

  //주소에서 구만 추출하여 includedArea에 저장
  props.like_list.forEach((item) => {
    const arr = item.address.split(" ")[1];
    includedArea.push(arr);
  });
  
  const selectOne = (area: string) => {
    const filteredlist = props.like_list.filter((item) =>
      item.address.includes(area)
    );
    setSelectedArea(filteredlist);
  };

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
            <AreaInclude
              includedArea={includedArea}
              selectOne={selectOne}
            ></AreaInclude>
          </div>

          <ListBox>
            <ScrollBarBox>
              {selectedArea.length > 0 ? (
                selectedArea.map((item: any) => {
                  return (
                    <React.Fragment key={item.r_code}>
                      <Post {...item} isMap />
                    </React.Fragment>
                  );
                })
              ) : (
                <div style={{ textAlign: "center" }}>
                  <p>지역을 클릭하여 저장한 맛집 정보를 확인할 수 있어요!</p>
                  <div
                    style={{
                      display: "flex",
                      fontSize: "20px",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "150px",
                    }}
                  >
                    리스트가 없습니다.
                  </div>
                </div>
              )}
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
