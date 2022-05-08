import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators as searchActions } from "../../redux/modules/main";
import sushi from "../../static/image/sushi.svg";
import chosen_guide from "../../static/image/chosen_guide.svg";
import restart_bttn from "../../static/image/restart.svg";
import cantchoose_font from "../../static/image/cantchoose_font.svg" 
import {
  first_category,
  meat,
  korea_food,
  japanes_food,
  american_food,
  bunsik,
  noodle,
  chinese_food,
  soup,
  jokbal,
} from "../../shared/lists";
import arrow_line from "../../static/image/arrow-line .svg";
const ChooseFood: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [chosenOne, setChosenOne] = useState("시작!");
  let [pick_list, setPick_list] = useState<Array<string>>([]);
  let [saveList, setSaveList] = useState<Array<string>>([]);
  const [final_food, setFinal_food] = useState<boolean>(false);
  const [prevStep, setPreStep] = useState<boolean>(false);

  console.log(pick_list, saveList);
  while (pick_list.length < 8) {
    // 카테고리는 총 12개인데 8개만 나오기때문에 길이가 8이될때까지 while문 돌리고
    const rPick = Math.floor(Math.random() * first_category.length);
    if (pick_list.indexOf(first_category[rPick]) === -1) {
      pick_list.push(first_category[rPick]);
      if (pick_list.length === 8) {
        setPick_list(pick_list);
      }
    }
  }

  const second_category = (food: string) => {
    setChosenOne(food);
    setPreStep(true);
    const save_list = [...pick_list];
    const second_list: Array<any> = [];

    while (second_list.length < 8 && saveList.length === 0) {
      if (food === "한식") {
        const rPick = Math.floor(Math.random() * korea_food.length);
        if (second_list.indexOf(korea_food[rPick]) === -1) {
          second_list.push(korea_food[rPick]);
        }
      } else if (food === "일식") {
        const rPick = Math.floor(Math.random() * japanes_food.length);
        if (second_list.indexOf(japanes_food[rPick]) === -1) {
          second_list.push(japanes_food[rPick]);
        }
      } else if (food === "중국식") {
        const rPick = Math.floor(Math.random() * chinese_food.length);
        if (second_list.indexOf(chinese_food[rPick]) === -1) {
          second_list.push(chinese_food[rPick]);
        }
      } else if (food === "경양식") {
        const rPick = Math.floor(Math.random() * american_food.length);
        if (second_list.indexOf(american_food[rPick]) === -1) {
          second_list.push(american_food[rPick]);
        }
      } else if (food === "찜탕") {
        const rPick = Math.floor(Math.random() * soup.length);
        if (second_list.indexOf(soup[rPick]) === -1) {
          second_list.push(soup[rPick]);
        }
      } else if (food === "국수") {
        const rPick = Math.floor(Math.random() * noodle.length);
        if (second_list.indexOf(noodle[rPick]) === -1) {
          second_list.push(noodle[rPick]);
        }
      } else if (food === "치킨" || food === "고기구이") {
        const rPick = Math.floor(Math.random() * meat.length);
        if (second_list.indexOf(meat[rPick]) === -1) {
          second_list.push(meat[rPick]);
        }
      } else if (food === "분식") {
        const rPick = Math.floor(Math.random() * bunsik.length);
        if (second_list.indexOf(bunsik[rPick]) === -1) {
          second_list.push(bunsik[rPick]);
        }
      } else if (food === "족발보쌈") {
        const rPick = Math.floor(Math.random() * jokbal.length);
        if (second_list.indexOf(jokbal[rPick]) === -1) {
          second_list.push(jokbal[rPick]);
        }
      } else if (food === "뷔페식") {
        const rPick = Math.floor(Math.random() * jokbal.length);
        if (second_list.indexOf(jokbal[rPick]) === -1) {
          second_list.push(jokbal[rPick]);
        }
      }
    }
    if (saveList.length === 0) {
      //선택한적이없어 saveList값이 없다면 리스트 업데이트, saveList값 업데이트
      setPick_list(second_list);
      setSaveList(save_list);
    } else {
      //한번 선택하여 saveList값이 존재한다면 선택시 마지막 음식출력
      setFinal_food(true);
    }
  };

  const restart = () => {
    setChosenOne("시작!");
    setFinal_food(false);
    setPick_list([]);
    setSaveList([]);
    setPreStep(false);
  };
  return (
    <>
      {final_food ? (
        <div style={{ textAlign: "center", marginTop: "5px" }}>
          <p
            style={{
              marginTop: "8px",
              fontSize: "18px",
              color: "#E22F2F",
              fontFamily: "IBM Plex Sans KR",
              marginBottom: "32px",
            }}
          >
            짜잔~! "{chosenOne}" 확정!
            <br />
            오늘은 {chosenOne} 맛집가자!
          </p>
          <div style={{ position: "relative" }}>
            <img src={sushi} alt=""></img>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "52px",
                width: "190px",
                height: "151px",
                backgroundColor: "rgba(0,0,0, 0.4)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "35px",
                color: "white",
                fontFamily: "IBM Plex Sans KR",
              }}
              onClick={() =>
                dispatch(searchActions.getSearchDB(chosenOne, navigate))
              }
            >
              {chosenOne}
            </div>
          </div>
          <img src={chosen_guide} alt="" style={{ marginTop: "23px" }}></img>
          <img
            src={restart_bttn}
            alt=""
            style={{ marginTop: "23px" }}
            onClick={() => {
              restart();
            }}
          ></img>
        </div>
      ) : (
        <div
          className="title"
          style={{
            textAlign: "center",
            marginTop: "5px",
          }}
        >
          <img src={cantchoose_font} alt=""></img>
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
                      onClick={() => second_category(item)}
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
                  onClick={() => second_category(item)}
                >
                  {item}
                </Item>
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {prevStep && (
              <div>
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={() => restart()}
                >
                  <img src={arrow_line} alt=""></img>
                </button>
                <p>뒤로가기</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const Item = styled.div`
  background-color: #ffdcdc;
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: #ff7373;
  }
`;
export default ChooseFood;
