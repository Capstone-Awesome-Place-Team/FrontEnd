import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/configStore";
import review_enter from "../../static/image/review_enter.svg";
import { actionCreators as commentActions } from "../../redux/modules/restaurant";
const WriteComment: React.FC<{ value: number }> = (props) => {
  const dispatch = useDispatch();
  const { value } = props;

  const redux_comment = useSelector(
    (state: RootState) => state.restaurant
  ).mycomment;
  const r_code = useSelector((state: RootState) => state.restaurant.r_code);
  const a = useSelector((state: RootState) => state.restaurant);

  //   const [comment, setComment] = useState("");
  const content = useRef<HTMLTextAreaElement>(null);
  const title = useRef<HTMLTextAreaElement>(null);
  const isLogin = localStorage.getItem("token");

  const Comment_confirm = () => {
    if (
      content.current?.value.length === 0 ||
      title.current?.value.length === 0 ||
      value === 0
    ) {
      alert("평점, 제목과 내용 입력해주세요"); // 나중에 다른걸로 바꿀것, 테스트하기위해 추가
    } else {
      const comments = {
        star: value,
        title: title.current!.value,
        content: content.current!.value,
      };
      dispatch(commentActions.addReviewDB(comments, r_code));
    }
  };
  return (
    <>
      {isLogin !== null ? (
        redux_comment.title === "" ? (
          <>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "1px 5px" }}>제목: </div>
              <Title defaultValue={redux_comment.title} ref={title}></Title>
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
              <TextArea
                defaultValue={redux_comment.title}
                ref={content}
              ></TextArea>
              <div
                style={{
                  backgroundImage: `url(${review_enter})`,
                  width: "55px",
                  height: "55px",
                  margin: "0 0 0 10px",
                }}
                onClick={Comment_confirm}
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
