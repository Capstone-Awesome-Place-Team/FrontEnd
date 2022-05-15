import React, { useEffect, useState } from "react";
import styled from "styled-components";
import close_line from "../../static/image/close-line2.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { actionCreators as ResultActions } from "../../redux/modules/main";

const Filter: React.FC<{ setOpenModal: Function }> = ({ setOpenModal }) => {
  const dispatch = useDispatch();
  const result = useSelector((state: RootState) => state.main.search_list);
  const isSaved = useSelector((state: RootState) => state.main.IsSaved);

  const saved = useSelector((state: RootState) => state.main.save_result);
  console.log(saved, isSaved);
  const [priceClicked, setPriceClicked] = useState([true, false, false, false]);
  const [takeOutClick, setTakeOutClick] = useState(true);
  const [parkClick, setParkClick] = useState(true);

  useEffect(() => {
    if (!isSaved) {
      dispatch(ResultActions.resultSave(result)); // 딱한번 검색된 리스트를 저장함
    }
  }, []);

  const Filtering = () => {
    //모든 조건 일일이 넣음
    let filtered_result;
    if (priceClicked[0]) {
      if (takeOutClick && parkClick) {
        filtered_result = saved.filter(
          (item: any) =>
            item.price < 10000 && item.options.takeout && item.options.parking
        );
      } else if (takeOutClick && !parkClick) {
        filtered_result = saved.filter(
          (item: any) => item.price < 10000 && item.options.takeout
        );
        console.log(filtered_result);
      } else if (!takeOutClick && parkClick) {
        filtered_result = saved.filter(
          (item: any) => item.price < 10000 && item.options.parking
        );
      } else {
        filtered_result = saved.filter((item: any) => item.price < 10000);
      }
    }
    if (priceClicked[1]) {
      if (takeOutClick && parkClick) {
        filtered_result = saved.filter(
          (item: any) =>
            item.price >= 10000 &&
            item.price < 20000 &&
            item.options.takeout &&
            item.options.parking
        );
      } else if (takeOutClick && !parkClick) {
        filtered_result = saved.filter(
          (item: any) =>
            item.price >= 10000 && item.price < 20000 && item.options.takeout
        );
      } else if (!takeOutClick && parkClick) {
        filtered_result = saved.filter(
          (item: any) =>
            item.price >= 10000 && item.price < 20000 && item.options.parking
        );
      } else {
        filtered_result = saved.filter(
          (item: any) => item.price >= 10000 && item.price < 20000
        );
      }
    }
    if (priceClicked[2]) {
      if (takeOutClick && parkClick) {
        filtered_result = saved.filter(
          (item: any) =>
            item.price >= 20000 &&
            item.price < 30000 &&
            item.options.takeout &&
            item.options.parking
        );
      } else if (takeOutClick && !parkClick) {
        filtered_result = saved.filter(
          (item: any) =>
            item.price >= 20000 && item.price < 30000 && item.options.takeout
        );
      } else if (!takeOutClick && parkClick) {
        filtered_result = saved.filter(
          (item: any) =>
            item.price >= 20000 && item.price < 30000 && item.options.parking
        );
      } else {
        filtered_result = saved.filter(
          (item: any) => item.price >= 20000 && item.price < 30000
        );
      }
    }
    if (priceClicked[3]) {
      if (takeOutClick && parkClick) {
        filtered_result = saved.filter(
          (item: any) =>
            item.price > 40000 && item.options.takeout && item.options.parking
        );
      } else if (takeOutClick && !parkClick) {
        filtered_result = saved.filter(
          (item: any) => item.price > 40000 && item.options.takeout
        );
      } else if (!takeOutClick && parkClick) {
        filtered_result = saved.filter(
          (item: any) => item.price > 40000 && item.options.parking
        );
      } else {
        filtered_result = saved.filter((item: any) => item.price > 40000);
      }
    }
    console.log(filtered_result);
    dispatch(ResultActions.getSearchResult(filtered_result));
    setOpenModal(false);
  };

  return (
    <>
      <div
        className="modalBackground"
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0,0,0, 0.5)",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "99",
        }}
      >
        <div
          className="modalContainer"
          style={{
            width: "330px",
            height: "506px",
            borderRadius: "55px",
            backgroundColor: "#EAEAEA",
            boxShadow: "rgba(0,0,0, 0.35) 0 5px 15px",
            padding: "18px", // 모달창안의 여백
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              height: "25px",
            }}
            className="close_button_area"
          >
            <button
              onClick={() => setOpenModal(false)}
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              <img src={close_line} alt=""></img>
            </button>
          </div>
          <div
            className="body"
            style={{ textAlign: "center", marginTop: "50px" }}
          >
            <P>가격</P>
            <div
              className="prices"
              style={{ display: "flex", marginBottom: "10px" }}
            >
              <Btn
                priceWidth
                Margin
                Font
                isClicked={priceClicked[0]}
                onClick={() => setPriceClicked([true, false, false, false])}
                className="price1"
              >
                ~1만원
              </Btn>
              <Btn
                priceWidth
                Margin
                Font
                isClicked={priceClicked[1]}
                onClick={() => setPriceClicked([false, true, false, false])}
                className="price2"
              >
                1~2만원
              </Btn>
              <Btn
                priceWidth
                Margin
                Font
                isClicked={priceClicked[2]}
                onClick={() => setPriceClicked([false, false, true, false])}
                className="price3"
              >
                2~3만원
              </Btn>
              <Btn
                priceWidth
                Margin
                Font
                isClicked={priceClicked[3]}
                onClick={() => setPriceClicked([false, false, false, true])}
                className="price4"
              >
                4만원~
              </Btn>
            </div>
            <P>테이크아웃</P>
            <BtnWrap>
              <Btn
                className="takeYes"
                isClicked={takeOutClick}
                onClick={() => setTakeOutClick(true)}
              >
                yes
              </Btn>
              <Btn
                className="takeNo"
                isClicked={takeOutClick}
                onClick={() => setTakeOutClick(false)}
                priceWidth
              >
                상관없음
              </Btn>
            </BtnWrap>
            <P>주차</P>
            <BtnWrap>
              <Btn
                className="parkYes"
                isClicked={parkClick}
                onClick={() => setParkClick(true)}
              >
                yes
              </Btn>
              <Btn
                className="parkNo"
                isClicked={parkClick}
                onClick={() => setParkClick(false)}
                priceWidth
              >
                상관없음
              </Btn>
            </BtnWrap>
            <div>
              <Btn
                priceWidth
                style={{ margin: "0 auto" }}
                onClick={() => Filtering()}
              >
                확인
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const P = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const BtnWrap = styled.div`
  display: flex;
  border: 1px solid black;
  justify-content: space-around;
  padding: 10px;
  margin: 10px 0;
`;

const Btn = styled.div`
  width: ${(props: { priceWidth: boolean }) =>
    props.priceWidth ? "100px" : "40px"};
  font-size: ${(props: { Font: boolean }) => (props.Font ? "15px" : "20px")};
  font-weight: bold;
  background-color: #ea6e6e;
  color: white;
  border-radius: 5px;
  text-align: center;
  margin: ${(props: { Margin: boolean }) => (props.Margin ? "5px" : "0px")};
  padding: 5px;
  cursor: pointer;
  :hover {
    background-color: red;
  }
  :active {
    box-shadow: 0px 0px 5px #b20505;
  }
  :nth-child(1).price1 {
    background-color: ${(props: { isClicked: boolean[] }) =>
      props.isClicked && "red"};
  }
  :nth-child(2).price2 {
    background-color: ${(props: { isClicked: boolean[] }) =>
      props.isClicked && "red"};
  }
  :nth-child(3).price3 {
    background-color: ${(props: { isClicked: boolean[] }) =>
      props.isClicked && "red"};
  }
  :nth-child(4).price4 {
    background-color: ${(props: { isClicked: boolean[] }) =>
      props.isClicked && "red"};
  }
  :nth-child(1).takeYes {
    background-color: ${(props: { isClicked: boolean }) =>
      props.isClicked && "red"};
  }
  :nth-child(2).takeNo {
    background-color: ${(props: { isClicked: boolean }) =>
      props.isClicked === false && "red"};
  }
  :nth-child(1).parkYes {
    background-color: ${(props: { isClicked: boolean }) =>
      props.isClicked && "red"};
  }
  :nth-child(2).parkNo {
    background-color: ${(props: { isClicked: boolean }) =>
      props.isClicked === false && "red"};
  }
`;
export default Filter;
