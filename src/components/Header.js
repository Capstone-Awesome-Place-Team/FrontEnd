import React from "react";

const Header = (props) => {
  return (
    
      <div
        style={{
          display: "flex",
          position: "fixed",
          height: "80px",
          width: "100%",
          background: "#FFA7A7",
          top: "0px",
          left: "0px",
          justifyContent: "space-between",
          zIndex:"5"
        }}
      >
        <div style={{ padding: "25px" }}>name</div>
        <div style={{ padding: "25px" }}>logo</div>
        <div style={{ padding: "25px" }}>로그인/마이페이지 영역</div>
      </div>
   
  );
};

export default Header;
