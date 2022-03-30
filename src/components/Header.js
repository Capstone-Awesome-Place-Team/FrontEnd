import React from "react";
import header_profile from '../static/image/header_profile.svg'

const Header = (props) => {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        height: "58px",
        width: "100%",
        background: "#E22F2F",
        top: "0px",
        left: "0px",
        justifyContent: "space-between",
        zIndex: "5",
        color: "white",
        fontSize: "25px",
        alignItems:"center",
        padding:"0px 7px",
        boxSizing:"border-box"
      }}
    >
      <div>Awesome Place</div>
      <div>logo</div>
      <div style={{display:"flex", alignItems:"center"}}>
      <div >로그인/마이페이지</div>
      <img src={header_profile} alt="profile"></img>
      </div>
    </div>
  );
};

export default Header;
