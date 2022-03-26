import React, { useRef } from "react";


const Login = (props) => {   
    const Id = useRef();
    const Pwd = useRef();

  const checkLogin = (event) =>{
    event.preventDefault();
    console.log(Id.current.value, Pwd.current.value)
  }

  return (
    <div style={{ display:"block", margin:"auto", width:"500px", textAlign:"center" }}>
        <image>로고 자리</image>
      <form onSubmit={checkLogin}>
        <input type="text" id="id" ref={Id} placeholder="ID" style={{display:"block", margin:"auto" }} ></input>
        <input type="text" id="pwd" ref={Pwd} placeholder="PW" style={{display:"block", margin:"auto" }}></input>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};



export default Login;
