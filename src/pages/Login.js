import React, { useRef, useState } from "react";
import { IdCheck, PwCheck } from "../shared/regex";
import example_log from "../static/image/example_logo.png";
const Login = (props) => {
  const Id = useRef();
  const Pwd = useRef();
  const checkLogin = (event) => {
    event.preventDefault();
    const checkId = IdCheck(Id.current.value);
    const checkPw = PwCheck(Pwd.current.value);

    if (!checkId || !checkPw) {
      alert("아이디 또는 비밀번호 형식이 틀립니다.");
    } else {
      console.log("API 통신 보내기");
    }
  };

  React.useEffect(() => {
    // 로그인 API 보내기
  }, []);

  return (
    <div
      style={{
        margin: "200px auto",
        width: "100%",
        textAlign: "center",
        border: "1px solid black",
      }}
    >
      <div style={{ width: "200px", margin: "50px auto" }}>
        <img src={example_log} alt="로고" width="200px"></img>
      </div>
      <form
        onSubmit={checkLogin}
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div>
          <input
            type="text"
            id="id"
            ref={Id}
            placeholder="ID"
            style={{ display: "block", margin: "0px 0px 5px 0px" }}
          ></input>
          <input
            type="text"
            id="pwd"
            ref={Pwd}
            placeholder="PW"
            style={{ display: "block" }}
          ></input>
        </div>
        <div style={{ margin: "0 0 0 5px" }}>
          <button
            type="submit"
            style={{
              padding: "15px",
              border: "none",
              color: "white",
              background: "#FF4465",
            }}
          >
            로그인
          </button>
        </div>
      </form>
      <div>회원가입</div>
    </div>
  );
};

export default Login;
