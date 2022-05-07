import start_btn from "../../static/image/start_btn.svg";
const RandomGame: React.FC = () => {
  return (
    <>
      <div
        className="title"
        style={{
          textAlign: "center",
          marginTop: "5px",
        }}
      >
        <h1>랜덤 추천 이름</h1>
        <p>랜덤 추천 문구</p>
        <div className="body">
          <p>내용</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img
            src={start_btn}
            alt=""
            onClick={() => console.log("클릭시 애니메이션")}
          ></img>
        </div>
      </div>
    </>
  );
};

export default RandomGame;
