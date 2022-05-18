import { url } from "inspector";
import { useState } from "react";
import styled from "styled-components";
import {
  review_arrow,
  star_0,
  star_1,
  star_1_5,
  star_2,
  star_2_5,
  star_3,
  star_3_5,
  star_4,
  star_4_5,
  star_5,
} from "../../static/imgIndex";
const GiveStar: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [star, setStar] = useState(0);
  const [isChoose, setIsChoose] = useState(false);
  const [value, isValue] = useState(0);
  const star_list = [
    star_1,
    star_1_5,
    star_2,
    star_2_5,
    star_3,
    star_3_5,
    star_4,
    star_4_5,
    star_5,
  ];
  console.log(value);
  const choose_one = (idx: number) => {
    setStar(idx);
    setIsChoose(true);
    setIsClicked(!isClicked);
    isValue((idx + 2) / 2);
  };
  return (
    <div className="give_star" style={{ display: "flex" }}>
      <div
        style={{
          fontSize: "17px",
          fontWeight: "bold",
          color: "#747474",
          display: "flex",
          alignItems: "center",
        }}
      >
        나의 리뷰
      </div>
      <div style={{ position: "relative", margin: "5px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <StarBox item={star_list[star]} isChoose={isChoose}></StarBox>
          <div
            style={{
              width: "40px",
              height: "35px",
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${review_arrow})`,
                width: "30px",
                height: "18px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                //   borderBottom: "1px solid black"
              }}
              onClick={() => setIsClicked(!isClicked)}
            ></div>
          </div>
        </div>
        {isClicked && (
          <div
            style={{
              position: "absolute",
              width: "200px",
              height: "310px",
              overflowY: "auto",
              border: "1px solid black",
              backgroundColor: "white",
            }}
          >
            {star_list.map((item, idx) => {
              return (
                <Star
                  item={item}
                  onClick={() => choose_one(idx)}
                  key={idx}
                ></Star>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const Star = styled.div`
  background-image: ${(props: { item: string }) => `url(${props.item})`};
  width: 160px;
  height: 34px;
  background-size: contain;
  background-repeat: no-repeat;
  :hover {
    background-color: #ececec;
  }
`;

const StarBox = styled.div`
  background-image: ${(props: { item: string; isChoose: boolean }) =>
    props.isChoose ? `url(${props.item})` : `url(${star_0})`};

  width: 160px;
  height: 35px;
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid black;
  /* background-position:center; */
`;
export default GiveStar;
