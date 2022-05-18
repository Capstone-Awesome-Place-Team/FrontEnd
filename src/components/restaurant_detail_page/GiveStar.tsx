import { url } from "inspector";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/configStore";
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
  const mycomment = useSelector(
    (state: RootState) => state.restaurant
  ).mycomment;
  console.log(mycomment);
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
      <MyreviewFont>나의 리뷰</MyreviewFont>
      {mycomment.title === "" ? (
        <OutWrap>
          <div style={{ display: "flex", alignItems: "center" }}>
            <StarBox item={star_list[star]} isChoose={isChoose}></StarBox>
            <ArrowWrap>
              <ReviewArrow
                onClick={() => setIsClicked(!isClicked)}
              ></ReviewArrow>
            </ArrowWrap>
          </div>
          {isClicked && (
            <StarListInWrap>
              {star_list.map((item, idx) => {
                return (
                  <Star
                    item={item}
                    onClick={() => choose_one(idx)}
                    key={idx}
                  ></Star>
                );
              })}
            </StarListInWrap>
          )}
        </OutWrap>
      ) : (
        <OutWrap>
          <div style={{ display: "flex", alignItems: "center" }}>
            <StarBox
              item={star_list[mycomment.star * 2 - 2]}
              reviewed
            ></StarBox>
            <ArrowWrap>
              <ReviewArrow></ReviewArrow>
            </ArrowWrap>
          </div>
        </OutWrap>
      )}
    </div>
  );
};

const OutWrap = styled.div`
  position: relative;
  margin: 5px;
`;

const StarListInWrap = styled.div`
  position: absolute;
  width: 200px;
  height: 310px;
  overflow-y: auto;
  border: 1px solid black;
  background-color: white;
`;

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
  background-image: ${(props: {
    item: string;
    isChoose: boolean;
    reviewed: boolean;
  }) =>
    props.isChoose
      ? `url(${props.item})`
      : props.reviewed
      ? `url(${props.item})`
      : `url(${star_0})`};
  width: 160px;
  height: 35px;
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid black;
  /* background-position:center; */
`;

const MyreviewFont = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: #747474;
  display: flex;
  align-items: center;
`;

const ArrowWrap = styled.div`
  width: 40px;
  height: 35px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewArrow = styled.div`
  background-image: url(${review_arrow});
  width: 30px;
  height: 18px;
  background-size: contain;
  background-repeat: no-repeat;
`;
export default GiveStar;
