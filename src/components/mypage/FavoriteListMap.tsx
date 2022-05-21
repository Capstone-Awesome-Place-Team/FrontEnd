import React, { useRef, useEffect, ReactEventHandler, useState } from "react";
import styled from "styled-components";
import { FavoritePropsType } from "../../types/interfaces";
import Post from "../Post";
import AreaInclude from "./AreaInclude";
import map from "../../static/image/map.svg";
import { useNavigate } from "react-router-dom";

const FavoriteListMap: React.FC<FavoritePropsType> = (props) => {
  const navigate = useNavigate();
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
          <Map>
            <AreaInclude
              includedArea={includedArea}
              selectOne={selectOne}
            ></AreaInclude>
          </Map>

          <ListBox>
            <ScrollBarBox>
              {selectedArea.length > 0 ? (
                selectedArea.map((item: any) => {
                  return (
                    <div key={item.r_code} onClick={() => navigate(`/restaurant/${item.r_code}`)}>
                      <Post {...item} isMap />
                    </div>
                  );
                })
              ) : (
                <div style={{ textAlign: "center" }}>
                  <P>지역을 클릭하여 저장한 맛집 정보를 확인할 수 있어요!</P>
                  <NoList>리스트가 없습니다.</NoList>
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
  border: 2px solid #747474;
  border-top: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 20px 20px;
  margin: 0 auto;
  @media (max-width: 576px) {
    width: 100%;
    border: none;
    box-shadow: none;
  }
`;

const Map = styled.div`
  background-image: url(${map});
  background-size: 400px 325px;
  width: 400px;
  height: 325px;
  margin: 0 auto;
  @media (max-width: 576px) {
    background-size: 330px 267px;
    width: 330px;
    height: 267px;
    margin: 17px auto;
  }
`;

const ListBox = styled.div`
  border: 1px solid #c4c4c4;
  width: 480px;
  height: 190px;
  margin: auto;
  border-radius: 10px;
  @media (max-width: 576px) {
    width: 90%;
    height: 130px;
  }
  @media (max-height: 700px) {
    height: 120px;
  }
`;
const ScrollBarBox = styled.div`
  margin: 5px 0;
  width: 475px;
  height: 180px;
  overflow-y: auto;
  overflow-x: hidden;
  @media (max-width: 576px) {
    width: 99%;
    height: 120px;
  }
  @media (max-height: 700px) {
    height: 110px;
  }
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

const NoList = styled.div`
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  height: 150px;

  @media (max-width: 576px) {
    height: 100px;
  }
`;

const P = styled.p`
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;
export default FavoriteListMap;
