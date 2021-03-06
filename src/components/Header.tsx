import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import header_profile from "../static/image/header_profile.png";
import awesome from "../static/image/awesome_place_font.svg";
import logo from "../static/image/logo.svg";

const Header: React.FC = (props) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const isLogin = localStorage.getItem("token");
  return (
    <>
      {location === "/signin" || location === "/signup" ? null : (
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
            alignItems: "center",
            padding: "0px 7px",
            boxSizing: "border-box",
          }}
        >
          <div onClick={() => navigate("/")}>
            <img src={logo} alt="" style={{ marginRight: "5px" }}></img>
            <img src={awesome} alt=""></img>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            {isLogin === null && (
              <Box onClick={() => navigate("/signin")}>로그인</Box>
            )}
            {isLogin === null && <Stick>|</Stick>}
            {isLogin === null && (
              <Box onClick={() => navigate("/signup")}>회원가입</Box>
            )}

            {isLogin !== null && (
              <Box onClick={() => navigate("/mypage")}>마이페이지</Box>
            )}
            {isLogin !== null && <img src={header_profile} alt="profile"></img>}
          </div>
        </div>
      )}
    </>
  );
};

const Box = styled.div`
  margin: 0px 5px;
  background-image: url(${(props: any) => props.imgUrl});
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 576px) {
    font-size: 18px;
  }
`;
const Stick = styled.span`
  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export default Header;
