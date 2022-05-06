import arrow_line from "../../static/image/arrow-line .svg";
const ChooseFood:React.FC = ()=>{
    return (<> <div
        className="title"
        style={{
          // display:"inline-block",
          textAlign: "center",
          marginTop: "5px",
        }}
      >
        <h1>선택장애 추천 이름</h1>
        <p>선택장애 추천 문구</p>
        <div className="body">
          <p>내용</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              <img src={arrow_line} alt=""></img>
            </button>
            <p>이전단계</p>
          </div>
          <div>
            <button
              style={{ border: "none", backgroundColor: "transparent" }}
            >
              <img
                src={arrow_line}
                alt=""
                style={{ transform: "rotate(180deg)" }}
              ></img>
            </button>
            <p>다음단계</p>
          </div>
        </div>
      </div></>)
}

export default ChooseFood;