import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators as searchActions } from "../../redux/modules/main";
import start_btn from "../../static/image/start_btn.svg";
import food_sample from "../../static/image/food_sample.jpg";
import unchose_sample from "../../static/image/unchose_sample.jpg";
import { all_food } from "../../shared/lists";

const RandomGame: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ThreeFood, setThreeFood] = useState<Array<string>>([]);
  const arr = [0, 0, 0];
  const RandomGame = () => {
    const List = [];
    while (List.length < 3) {
      // 카테고리는 총 12개인데 8개만 나오기때문에 길이가 8이될때까지 while문 돌리고
      const rPick = Math.floor(Math.random() * all_food.length);
      if (List.indexOf(all_food[rPick]) === -1) {
        List.push(all_food[rPick]);
        if (List.length === 3) {
          setThreeFood(List);
        }
      }
    }
  };

  console.log(ThreeFood);
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
          {ThreeFood.length > 2 ? (
            <div
              className="wrap"
              style={{ display: "flex", margin: "43px 0 80px" }}
            >
              {ThreeFood.map((item, idx) => {
                return (
                  <div style={{ position: "relative" }} key={idx}>
                    <img
                      src={food_sample}
                      alt=""
                      style={{ marginRight: "5px" }}
                    ></img>
                    <div
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "96px",
                        height: "157px",
                        backgroundColor: "rgba(0,0,0, 0.4)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "28px",
                        color: "white",
                        fontFamily: "IBM Plex Sans KR",
                      }}
                      onClick={() =>
                        dispatch(searchActions.getSearchDB(item, navigate))
                      }
                    >
                      {item}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              className="wrap"
              style={{ display: "flex", margin: "43px 0 80px" }}
            >
              {arr.map((item, idx) => {
                return (
                  <div key={idx}>
                    <img
                      src={unchose_sample}
                      alt=""
                      style={{ marginRight: "5px" }}
                    ></img>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img src={start_btn} alt="" onClick={() => RandomGame()}></img>
        </div>
      </div>
    </>
  );
};

export default RandomGame;
