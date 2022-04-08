import React, { useRef, useState } from "react";
import { IdCheck, PwCheck } from "../shared/regex";
import example_logo from "../static/image/example_logo2.png";
import { useNavigate } from "react-router-dom";

const Login: React.FC = (props) => {
  const Id = useRef<HTMLInputElement>(null);
  const Pwd = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const checkLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const curruntId = Id.current!.value; // 굳이 변수를 만든이유는 아래 if조건문에 trim 함수를 쓸려고할때 타입스크립트 에러발생하기때문
    const currentPw = Pwd.current!.value;
    const checkId = IdCheck(curruntId);
    const checkPw = PwCheck(currentPw);

    //빈칸 입력에 따른 조건처리
    if (curruntId.trim().length === 0 || currentPw.trim().length === 0) {
      //throw an error
      return;
    }

    if (!checkId || !checkPw) {
      alert("아이디 또는 비밀번호 형식이 틀립니다.");
    } else {
      console.log("API 통신 보내기");
      // 로그인 API 보내기
    }
  };
  return (
    <div
      style={{
        maxWidth: "481px",
        maxHeight: "649px",
        border: "1px solid #9F9F9F",
        margin: "auto",
      }}
    >
      <div style={{ width: "186px", margin: "44px auto" }}>
        <img src={example_logo} alt="로고" width="186px"></img>
      </div>
      <form onSubmit={checkLogin}>
        <div style={{ width: "236px", margin: "auto" }}>
          <label htmlFor="id" style={{ color: "#747474" }}>
            아이디 입력
          </label>
          <input
            type="text"
            id="id"
            ref={Id}
            placeholder="ID"
            style={{
              display: "block",
              margin: "0px 0px 53px 0px",
              width: "236px",
              height: "30px",
              border: "solid 1px #747474",
            }}
          ></input>
          <label htmlFor="pwd" style={{ color: "#747474" }}>
            비밀번호 입력
          </label>
          <input
            type="text"
            id="pwd"
            ref={Pwd}
            placeholder="PW"
            style={{
              display: "block",
              margin: "5px 0px",
              width: "236px",
              height: "30px",
              border: "solid 1px #747474",
            }}
          ></input>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button
            type="submit"
            style={{
              width: "217px",
              height: "32px",
              border: "none",
              color: "white",
              background: "#E22F2F",
              borderRadius: "17px",
              margin: "89px 0px 16px 0px",
            }}
          >
            로그인
          </button>
          <button
            type="button"
            style={{
              width: "217px",
              height: "32px",
              border: "none",
              color: "white",
              background: "#747474",
              borderRadius: "17px",
              margin: "0px 0px 23px 0px"
            }}
            onClick={() => navigate("/signup")}
          >
            회원가입
          </button>
        </div>
        <p style={{textAlign:"center", color:"#A0A0A0", fontSize:"13px", fontWeight:"bold"}}>회원가입하고 어썸플레이스의 다양한 서비스를 누려보세요!</p>
      </form>
    </div>
  );
};

export default Login;
