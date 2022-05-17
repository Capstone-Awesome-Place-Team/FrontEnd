import { url } from "inspector";
import React from "react";
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
import review_pen from "../../static/image/review_pen.svg";

const Review: React.FC<{}> = () => {
  const detail = useSelector((state: RootState) => state.restaurant);
  const comments = useSelector((state: RootState) => state.restaurant).comments;
  console.log(comments);
  const star_list1 = [star_1, star_2, star_3, star_4, star_5];
  const star_list2 = [star_1_5, star_2_5, star_3_5, star_4_5];
  console.log(star_list1);
  return (
    <>
      <div style={{ display: "flex", margin: "10px 40px" }}>
        <img src={review_pen} alt=""></img>
        <div style={{ fontSize: "17px", fontWeight: "bold", color: "#747474" }}>
          리뷰({comments.length})
        </div>
      </div>

      <div
        className="Wrap"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <div
            className="comment_list_wrap"
            style={{
              border: "1px solid black",
              width: "340px",
              height: "283px",
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
                >
                  {item.star % 1 === 0
                    ? star_list1.map((star, idx) => {
                        return (
                          item.star - 1 === idx && (
                            <div
                              style={{
                                backgroundImage: `url(${star_list1[idx]})`,
                                width: "98px",
                                height: "18px",
                              }}
                            ></div>
                          )
                        );
                      })
                    : star_list2.map((star, idx) => {
                        return (
                          Math.floor(item.star) - 1 === idx && (
                            <div
                              style={{
                                backgroundImage: `url(${star_list2[idx]})`,
                                width: "98px",
                                height: "18px",
                              }}
                            ></div>
                          )
                        );
                      })}

                  <div className="nick_and_time" style={{ display: "flex" }}>
                    <div>{item.nickname},</div>
                    <div style={{margin:"0 5px"}}>{item.time}</div>
                  </div>
                  <div style={{fontSize:"15px", fontWeight:"bold"}}>{item.title}</div>
                  <div style={{fontSize:"15px"}}>{item.content}</div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "340px",
              height: "72px",
            }}
          >
            리뷰남기기
          </div>
        </div>
        <div style={{ border: "1px solid black", width: "294px" }}>이미지</div>
      </div>
    </>
  );
};

export default Review;
