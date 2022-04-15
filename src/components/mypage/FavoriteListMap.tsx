import React from "react";
import styled from "styled-components";
import { FavoritePropsType } from "../../types/interfaces";
import Post from "../Post";
import map from "../../static/image/map.svg";
const FavoriteListMap: React.FC<FavoritePropsType> = (props) => {
  return (
    <Container>
      {props.is_login ? (
        <div>
          <ImgWrap>
            <img src={map} width="400px" alt="map"></img>
          </ImgWrap>
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
