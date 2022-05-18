import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/configStore";
import review_enter from "../../static/image/review_enter.svg";
const WriteComment: React.FC = () => {
  const redux_comment = useSelector(
    (state: RootState) => state.restaurant.mycomment
  );
  const [comment, setComment] = useState("");
  const comments = useRef<HTMLTextAreaElement>(null);
  const isLogin = localStorage.getItem("token");
  console.log(isLogin);
  const Comment_confirm = () => {
    console.log(comments.current?.value);
  };
  return (
    <>
      {isLogin !== null ? (
        redux_comment.title === "" ? (
          <>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "1px 5px" }}>제목: </div>
              <Title defaultValue={comment}></Title>
            </div>
            <div
              style={{
                border: "1px solid black",
                width: "340px",
                height: "72px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextArea defaultValue={comment} ref={comments}></TextArea>
              <div
                style={{
                  backgroundImage: `url(${review_enter})`,
                  width: "55px",
                  height: "55px",
                  margin: "0 0 0 10px",
                }}
                onClick={() => Comment_confirm()}
              ></div>
            </div>
          </>
        ) : (
          <>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "1px 5px" }}>제목: </div>
              <Title value={redux_comment.title} disabled></Title>
            </div>
            <div
              style={{
                border: "1px solid black",
                width: "340px",
                height: "72px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextArea value={redux_comment.content} disabled></TextArea>
              <div
                style={{
                  backgroundImage: `url(${review_enter})`,
                  width: "55px",
                  height: "55px",
                  margin: "0 0 0 10px",
                }}
              ></div>
            </div>
          </>
        )
      ) : (
        <NotLogin>리뷰를 남기려면 로그인이 필요해요!</NotLogin>
      )}
    </>
  );
};

const TextArea = styled.textarea`
  resize: none;
  width: 260px;
  height: 70px;
  border: none;
  color: black;
`;
const Title = styled.textarea`
  resize: none;
  width: 260px;
  height: 20px;
  border: 1px solid black;
  font-weight: bold;
  color: black;
`;

const NotLogin = styled.div`
  font-size: 17px;
  color: #747474;
  border: 1px solid black;
  width: 340px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;
export default WriteComment;
