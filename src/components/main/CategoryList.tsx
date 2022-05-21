import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as mainActions } from "../../redux/modules/main";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import category_font from "../../static/image/category_font.svg";
import { c_sushi,
  soup,
  noodle,
  meat,
  korean,
  jokbal,
  japanese,
  chinese,
  chicken,
  buffet,
  boonsik ,
  american} from "../../static/imgIndex"





const CategoryList: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const arr = [
    "한식",
    "중국식",
    "일식",
    "뷔페식",
    "경양식",
    "찜탕",
    "족발보쌈",
    "회",
    "고기구이",
    "국수",
    "치킨",
    "분식",
  ];

 const category = [
  korean,
  chinese,
  japanese,
  buffet,
  american,
  soup,
  jokbal,
  c_sushi,
  meat,
  noodle,
  chicken ,
  boonsik
 ]

  return (
    <>
      <Font>
        <FontImg src={category_font} alt=""></FontImg>{" "}
      </Font>
      <FlexWrap>
        <SmallWrap>
          {arr.map((item, idx) => {
            return (
              <div key={idx} onClick={()=>navigate(`/list/${item}`)}>
                <Box Img = {category[idx]}></Box>
                <P>{item}</P>
              </div>
            );
          })}
        </SmallWrap>
      </FlexWrap>
    </>
  );
};

const FlexWrap = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom:40px;
`;
const SmallWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 576px) {
    width: 440px;
  }
`;

const Font = styled.div`
  margin: 40px auto;
  width: fit-content;
  @media (max-width: 576px) {
    margin: 20px auto;
  }
`;
const FontImg = styled.img`
  @media (max-width: 576px) {
    width: 177px;
  }
`;

const Box = styled.div`
  width: 82px;
  height: 82px;
  background-image: ${(props:{Img:string})=> `url(${props.Img})`};
  margin: 0 12px;
  @media (max-width: 576px) {
    width: 65px;
    height:65px;
    background-size:contain;
  }
`;
const P = styled.p`
  margin: 3px 0 15px;
  font-size:24px;
  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export default CategoryList;
