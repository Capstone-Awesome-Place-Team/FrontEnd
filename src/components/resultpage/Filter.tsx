import React from "react";
import styled from "styled-components";
import close_line from "../../static/image/close-line2.svg";
const Filter: React.FC<{ setOpenModal: Function }> = ({ setOpenModal }) => {
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
          <div className="body" style={{textAlign:"center"}}>
            <P>가격</P>
            <div
              className="prices"
              style={{ display: "flex", marginBottom:"10px"}}
            >
              <Btn priceWidth Margin Font>~1만원</Btn>
              <Btn priceWidth Margin Font>1~2만원</Btn>
              <Btn priceWidth Margin Font>2~3만원</Btn>
              <Btn priceWidth Margin Font>4만원~</Btn>
            </div>
            <P>테이크아웃</P>
            <BtnWrap>
              <Btn>yes</Btn>
              <Btn>no</Btn>
            </BtnWrap>
            <P>주차</P>
            <BtnWrap>
              <Btn>yes</Btn>
              <Btn>no</Btn>
            </BtnWrap>
          </div>
          {/* {games === true && <ChooseFood setOpenModal={setOpenModal} />} 
       {games === false && <RandomGame setOpenModal={setOpenModal} />} */}
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
  margin:10px 0;
`;

const Btn = styled.div`
  width: ${(props:{priceWidth:boolean})=>props.priceWidth?"100px":"40px"};
  font-size: ${(props:{Font:boolean})=>props.Font?"15px":"20px"};
  font-weight: bold;
  background-color: #ea6e6e;
  color: white;
  border-radius: 5px;
  text-align: center;
  margin: ${(props:{Margin:boolean})=>props.Margin?"5px":"0px"};
  padding:5px;
`;
export default Filter;
