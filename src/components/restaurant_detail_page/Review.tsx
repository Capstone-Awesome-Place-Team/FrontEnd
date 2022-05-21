import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import {
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

import GiveStar from "../restaurant_detail_page/GiveStar";
import WriteComment from "../restaurant_detail_page/WriteComment";
import review_pen from "../../static/image/review_pen.svg";
import review_background from "../../static/image/review_background.svg";
import styled from "styled-components";

const Review: React.FC<{}> = () => {
  const [value, isValue] = useState(0);
  const detail = useSelector((state: RootState) => state.restaurant);
  const comments = useSelector((state: RootState) => state.restaurant).comments;
  console.log(comments);
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
  // item.star * 2 - 2 => 평점으로 위 index 찾는 공식
  return (
    <>
      <ReviewFontWrap style={{}}>
        <img src={review_pen} alt="" width="36px"></img>
        <ReviewFont style={{}}>리뷰({comments.length})</ReviewFont>
      </ReviewFontWrap>

      <div
        className="Wrap"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <div
            className="comment_list_wrap"
            style={{
              border: "1px solid #999999",
              width: "340px",
              height: "283px",
              margin: "0 20px 30px 0",
              overflowY: "auto",
            }}
          >
            {comments.map((item: any, idx: number) => {
              return (
                <div
                  className="comment"
                  style={{
                    // border: "1px solid black",
                    width: "291px",
                    height: "80px",
                    backgroundColor: "#F4F4F4",
                    borderRadius: "9px",
                    margin: "10px 7px",
                  }}
                  key={idx}
                >
                  {star_list.map((star, idx) => {
                    return (
                      item.star * 2 - 2 === idx && (
                        <div
                          style={{
                            backgroundImage: `url(${star_list[idx]})`,
                            width: "98px",
                            height: "18px",
                          }}
                          key={idx}
                        ></div>
                      )
                    );
                  })}

                  <div
                    className="nick_and_time"
                    style={{
                      display: "flex",
                      fontWeight: "bold",
                      margin: "3px 0",
                    }}
                  >
                    <div>{item.nickname},</div>
                    <div style={{ margin: "0 5px" }}>{item.time}</div>
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      color: "#4B4B4B",
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: "15px", color: "#747474" }}>
                    {item.content}
                  </div>
                </div>
              );
            })}
          </div>
          <GiveStar isValue={isValue} value={value} />
          <WriteComment value={value} />
        </div>
        <ReviewBackground></ReviewBackground>
      </div>
    </>
  );
};

const ReviewBackground = styled.div`
  width: 294px;
  background-image: url(${review_background});
  @media (max-width: 576px) {
    display: none;
  }
`;

const ReviewFontWrap = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: center;
`;

const ReviewFont = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #747474;
  display: flex;
  align-items: center;
  width: 630px;
  @media (max-width: 576px) {
    width: 340px;
  }
`;
export default Review;
