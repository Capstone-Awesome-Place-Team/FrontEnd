import React, { useState } from "react";
import styled from "styled-components";
import arrow_line from "../../static/image/arrow-line .svg";
const ChooseFood: React.FC = () => {
  const food = [
    "한식",
    "중국식",
    "일식",
    "뷔페식",
    "경양식",
    "찜탕",
    "족발보쌈",
    "회",
    "고기구이",
    "국수",
    "치킨",
    "분식",
  ];
  const [chosenOne, setChosenOne] = useState("시작!");
  const [pick_list, setPick_list]=useState<any>([]);
  while (pick_list.length < 8) {
    // 카테고리는 총 12개인데 8개만 나오기때문에 길이가 8이될때까지 while문 돌리고
    const rPick = Math.floor(Math.random() * food.length);
    if (pick_list.indexOf(food[rPick]) === -1) {
      pick_list.push(food[rPick]);
    }
  }
  return (
    <>
      <div
        className="title"
        style={{
          textAlign: "center",
          marginTop: "5px",
        }}
      >
        <h1 style={{ color: "#E22F2F" }}>선택장애를 위한 선택!</h1>
        <p
          style={{
            marginTop: "8px",
          }}
        >
          끌리는게 있다면 클릭하세요!
        </p>
        <div
          style={{
            display: "flex",
            width: "218px",
            flexWrap: "wrap",
            margin: "29px auto",
          }}
        >
          {pick_list.map((item: any, idx: any) => {
            if (idx === 4) {
              return (
                <React.Fragment key={idx}>
                  <div
                    style={{
                      display: "flex",
                      width: "72px",
                      height: "72px",
                      backgroundColor: "#E22F2F",
                      border: "1px solid white",
                      color: "white",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      fontFamily: "IBM Plex Sans KR",
                    }}
                  >
                    {chosenOne}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "72px",
                      height: "72px",
                      backgroundColor: "#FFDCDC",
                      border: "1px solid white",
                      color: "#727272",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      fontFamily: "IBM Plex Sans KR",
                    }}
                    onClick={()=>setChosenOne(item)}
                  >
                    {item}
                  </div>
                </React.Fragment>
              );
            }
            if (idx > 8) {
              return null;
            }
            return (
              <Item
                style={{
                  display: "flex",
                  width: "72px",
                  height: "72px",
                  border: "1px solid white",
                  color: "#727272",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontFamily: "IBM Plex Sans KR",
                }}
                key={idx}
                onClick={()=>setChosenOne(item)}
              >
                {item}
              </Item>
            );
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <button style={{ border: "none", backgroundColor: "transparent" }}>
              <img src={arrow_line} alt=""></img>
            </button>
            <p>이전단계</p>
          </div>
          <div>
            <button style={{ border: "none", backgroundColor: "transparent" }}>
              <img
                src={arrow_line}
                alt=""
                style={{ transform: "rotate(180deg)" }}
              ></img>
            </button>
            <p>다음단계</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Item = styled.div`
  background-color: #ffdcdc;
  :hover{
    cursor:pointer;
  }
  :active {
    background-color: #ff7373;
  }
`;
export default ChooseFood;
