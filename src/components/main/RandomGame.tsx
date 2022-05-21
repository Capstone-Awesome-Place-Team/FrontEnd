import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators as searchActions } from "../../redux/modules/main";
import start_btn from "../../static/image/start_btn.svg";
import food_sample from "../../static/image/food_sample.jpg";
import unchose_sample from "../../static/image/unchose_sample.jpg";
import { all_food } from "../../shared/lists";
import styled from "styled-components";
type SettimeoutType = ReturnType<typeof setTimeout>;
const RandomGame: React.FC<{ setOpenModal: Function }> = ({ setOpenModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ThreeFood, setThreeFood] = useState<Array<string>>([]);
  const [isAnmiation, setIsAnimation] = useState<Array<boolean>>([
    false,
    false,
  ]);
  const [arrayAnimation, setArrayAnimation] = useState([false, false, false]);
  const [trigger, setTrigger] = useState<boolean>(false);
  const random_food_list = [
    "삼계탕",
    "닭갈비",
    "훈제오리",
    "오리구이",
    "갈비",
    "스테이크",
    "보쌈",
    "족발",
    "한우",
    "소갈비",
    "돼지불백",
    "삼겹주물럭",
  ];

  const arr = [0, 0, 0];
  const RandomGame = () => {
    setIsAnimation([true, false]); //시작하기를 다시눌렀을때 두구두구 문구부터 시작
    setArrayAnimation([true, true, true]);
    setTrigger(!trigger);
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

  const searching = (chosenOne: string) => {
    navigate(`/list/${chosenOne}`)
    // dispatch(searchActions.postSearchDB(chosenOne, navigate));
    setOpenModal(false);
  };

  useEffect(() => {
    let slot1: SettimeoutType,
      slot2: SettimeoutType,
      slot3: SettimeoutType,
      closetrigger: SettimeoutType;
    if (trigger === true) {
      slot1 = setTimeout(() => {
        setArrayAnimation((old) => [false, old[1], old[2]]);
      }, 800);
      slot2 = setTimeout(() => {
        setArrayAnimation((old) => [old[0], false, old[2]]);
      }, 1600);
      slot3 = setTimeout(() => {
        setArrayAnimation((old) => [old[0], old[1], false]);
        setIsAnimation((prev) => [prev[0], true]);
      }, 2400);
      closetrigger = setTimeout(() => {
        setTrigger(false);
      }, 2400);
    }
    return () => {
      clearTimeout(slot1);
      clearTimeout(slot2);
      clearTimeout(slot3);
      clearTimeout(closetrigger);
    };
  }, [trigger]);
  return (
    <>
      <div
        className="title"
        style={{
          textAlign: "center",
          // marginTop: "5px",
        }}
      >
        <p
          style={{
            fontSize: "30px",
            fontFamily: "IBM Plex Sans KR",
            color: "#E22F2F",
            marginBottom: "10px",
          }}
        >
          푸드 슬롯머신
        </p>
        {isAnmiation[0] ? (
          isAnmiation[1] ? (
            <p
              style={{
                color: "#7C7C7C",
                fontSize: "15px",
                fontFamily: "IBM Plex Sans KR",
              }}
            >
              오늘은 여기서 골라보자!
            </p>
          ) : (
            <p
              style={{
                color: "#7C7C7C",
                fontSize: "15px",
                fontFamily: "IBM Plex Sans KR",
              }}
            >
              두구~두구~두구~두구
            </p>
          )
        ) : (
          <p
            style={{
              color: "#7C7C7C",
              fontSize: "15px",
              fontFamily: "IBM Plex Sans KR",
            }}
          >
            오늘은 어떤 음식이 잭팟일까?
          </p>
        )}

        <div className="body">
          {ThreeFood.length > 2 ? (
            <div
              className="wrap"
              style={{ display: "flex", margin: "40px 0 15px" }}
            >
              {ThreeFood.map((item, idx) => {
                return (
                  <ImgOutside key={idx}>
                    <img
                      src={food_sample}
                      alt=""
                      style={{ marginRight: "5px" }}
                    ></img>
                    <ImgInside onClick={() => searching(item)}>
                      {arrayAnimation[idx] ? (
                        <SlideBox>
                          {random_food_list.map((food, idx) => {
                            return (
                              <SlotAnimationList key={idx}>
                                {food}
                              </SlotAnimationList>
                            );
                          })}
                        </SlideBox>
                      ) : (
                        <PickedFood>{item}</PickedFood>
                      )}
                    </ImgInside>
                  </ImgOutside>
                );
              })}
            </div>
          ) : (
            <div
              className="wrap"
              style={{ display: "flex", margin: "40px 0 15px" }}
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
        <p
          style={{
            fontFamily: "IBM Plex Sans KR",
            fontSize: "14px",
            color: "#FF7979",
            marginBottom: "45px",
          }}
        >
          음식을 클릭하면 관련 음식점들을 확인할 수 있어요!
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <StartBtn
            src={start_btn}
            alt=""
            onClick={() => RandomGame()}
          ></StartBtn>
        </div>
      </div>
    </>
  );
};

const SlideBox = styled.div`
  height: 200px;
  animation: slide 0.2s 12;
  @keyframes slide {
    0% {
      margin-top: 0;
    }
    10% {
      margin-top: -50px;
    }
    20% {
      margin-top: -100px;
    }
    30% {
      margin-top: -150px;
    }
    40% {
      margin-top: -200px;
    }
    50% {
      margin-top: -250px;
    }
    60% {
      margin-top: -300px;
    }
    70% {
      margin-top: -350px;
    }
    80% {
      margin-top: -400px;
    }
    90% {
      margin-top: -450px;
    }
    100% {
      margin-top: -500px;
    }
  }
`;
const ImgOutside = styled.div`
  position: relative;
  overflow: hidden;
`;
const ImgInside = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 96px;
  height: 157px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: white;
`;
const PickedFood = styled.div`
  font-family: IBM Plex Sans KR;
  cursor: pointer;
`;
const SlotAnimationList = styled.div`
  height: 100px;
  font-family: IBM Plex Sans KR;
`;

const StartBtn = styled.img`
  cursor: pointer;
`;

export default RandomGame;
