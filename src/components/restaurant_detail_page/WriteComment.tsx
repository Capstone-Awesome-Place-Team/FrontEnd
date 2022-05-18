import { useRef, useState } from "react";
import styled from "styled-components";
import review_enter from "../../static/image/review_enter.svg";
const WriteComment: React.FC = () => {
  const [comment, setComment] = useState("dd");
 const comments = useRef<HTMLTextAreaElement>(null);

  const Comment_confirm = () => {
    console.log(comments.current?.value)
  };
  return (
    <div
      style={{
        border: "1px solid black",
        width: "340px",
        height: "72px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <TextArea
        defaultValue={comment}
        ref={comments}
      ></TextArea>
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
  );
};

const TextArea = styled.textarea`
  resize: none;
  width: 260px;
  height: 70px;
  border: none;
`;

export default WriteComment;
