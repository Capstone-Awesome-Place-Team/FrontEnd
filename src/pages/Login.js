import React, { useRef, useState } from "react";
import { IdCheck, PwCheck } from "../shared/regex";

const Login = (props) => {
  const Id = useRef();
  const Pwd = useRef();
  const checkLogin = (event) => {
    event.preventDefault();
    const checkId = IdCheck(Id.current.value);
    const checkPw = PwCheck(Pwd.current.value);
    console.log(checkId, checkPw);
    if (!checkId || !checkPw) {
      alert("아이디 또는 비밀번호 형식이 틀립니다.");
    } else {
      console.log("API 통신 보내기");
    }
  
  };
  
 React.useEffect(()=>{
 // 로그인 API 보내기 
 },[])


  return (
    <div
      style={{
        display: "block",
        margin: "auto",
        width: "500px",
        textAlign: "center",
      }}
    >
      <image>로고 자리</image>
      <form onSubmit={checkLogin}>
        <input
          type="text"
          id="id"
          ref={Id}
          placeholder="ID"
          style={{ display: "block", margin: "auto" }}
        ></input>
        <input
          type="text"
          id="pwd"
          ref={Pwd}
          placeholder="PW"
          style={{ display: "block", margin: "auto" }}
        ></input>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
