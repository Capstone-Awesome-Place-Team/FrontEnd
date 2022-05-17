import React from "react";
const Review: React.FC<{}> = () => {
  return (
    <>
      <div className="Wrap" style={{ display: "flex", justifyContent:"center"}}>
        <div>
          <div
            className="comment_list"
            style={{
              border: "1px solid black",
              width: "340px",
              height: "283px",
            }}
          >
            리스트
          </div>
          <div style={{border:"1px solid black", width:"340px", height:"72px"}}>리뷰남기기</div>
        </div>
        <div style={{border:"1px solid black", width:"294px"}}>이미지</div>
      </div>
    </>
  );
};

export default Review;
