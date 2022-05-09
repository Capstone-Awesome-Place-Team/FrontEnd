import React, { ImgHTMLAttributes, useState } from "react";
import { useNavigate } from "react-router-dom";
import game_choose from "../../static/image/game_choose.svg";
import random_game from "../../static/image/random_game.jpg";
import random_game_font from "../../static/image/random_game_font.svg";
import game_choose_font from "../../static/image/game_choose_font.svg";
import styled from "styled-components";
const Entertains: React.FC<{ chooseGame: Function }> = (props) => {
  const { chooseGame } = props;

  return (
    <>
      <P>먹고싶은건 많은데 고르지 못하겠다구요?</P>
      <P big>오늘 뭐먹지? 선택이 어려울때!</P>
      <Wrap>
        <div style={{}}>
          <img
            src={game_choose_font}
            alt=""
            style={{ margin: "0 0 19px 0" }}
            width="170px"
          ></img>
          <GameImages
            Img={game_choose}
            onClick={() => {
              chooseGame("food");
            }}
          ></GameImages>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={random_game_font} alt=""></img>
          <GameImages
            Img={random_game}
            onClick={() => {
              chooseGame("random");
            }}
          ></GameImages>
        </div>
      </Wrap>
    </>
  );
};

const P = styled.p`
  text-align: center;
  font-size: ${(props: { big: boolean }) => (props.big ? `30px` : `15px`)};
  color: ${(props: { big: boolean }) => (props.big ? `#E22F2F` : `#7C7C7C`)};
  font-family: IBM Plex Sans KR;
  margin: ${(props: { big: boolean }) =>
    props.big ? `0 0 28px 0` : `42px 0 0 0`};
    @media(max-width:576px){
      font-size: ${(props: { big: boolean }) => (props.big ? `20px` : `15px`)};
    }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 0 42px 0;
  @media(max-width:576px){
    margin:0 0 20px 0;
  }
`;

const GameImages = styled.div`
  width: 170px;
  height: 163px;

  background-image: ${(props: { Img: string }) => `url(${props.Img})`};
  @media (max-width: 576px) {
    background-size: 112px;
    background-repeat: no-repeat;
    width: 112px;
    height:112px;
    margin: 0 auto;
  }
`;
export default Entertains;
