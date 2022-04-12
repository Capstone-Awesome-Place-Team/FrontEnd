import React from "react";
import styled from "styled-components";
const FavoriteListMap: React.FC = (props) => {
  return <Container>나만의 맛집 지도 컴포넌트</Container>;
};

const Container = styled.div`
  width: 528px;
  height: 75vh;
  text-align: center;
  border: 2px solid #747474;
  border-top: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  border-radius: 0 0 20px 20px;
  // padding: "5px",
  margin: auto;
`;
export default FavoriteListMap;
