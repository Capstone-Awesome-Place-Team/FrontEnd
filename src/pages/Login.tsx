import React, { useRef, useState } from "react";
import { IdCheck, PwCheck } from "../shared/regex";
import example_logo from "../static/image/example_logo2.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/configStore";
import { actionCreators as userActions } from "../redux/modules/users";

import back_arrow from "../static/image/back_arrow.svg";

const Login: React.FC = (props) => {
  const Id = useRef<HTMLInputElement>(null);
  const Pwd = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_info = useSelector((state: RootState) => state.user.user);

  const checkLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const curruntId = Id.current!.value; // 굳이 변수를 만든이유는 아래 if조건문에 trim 함수를 쓸려고할때 타입스크립트 에러발생하기때문
    const currentPw = Pwd.current!.value;
    const checkId = IdCheck(curruntId);
    const checkPw = PwCheck(currentPw);
    const user = {
      id: curruntId,
      pw: currentPw,
    };
    //빈칸 입력에 따른 조건처리
    if (curruntId.trim().length === 0 || currentPw.trim().length === 0) {
      //throw an error
      return;
    }

    if (!checkId || !checkPw) {
      alert("아이디 또는 비밀번호 형식이 틀립니다.");
    } else {
      dispatch(userActions.LoginDB(user, navigate));
      // 로그인 API 보내기
    }
  };
  return (
    <Wrap>
      <ImgWrap>
        <img src={example_logo} alt="로고" onClick={() => navigate("/")}></img>
      </ImgWrap>
      <form onSubmit={checkLogin}>
        <InputWrap>
          <Label htmlFor="id">아이디 입력</Label>
          <Input type="text" id="id" ref={Id} placeholder="ID"></Input>
          <Label htmlFor="pwd">비밀번호 입력</Label>
          <Input type="password" id="pwd" ref={Pwd} placeholder="PW" pw></Input>
        </InputWrap>
        <ButtonWrap>
          <Button type="submit" MarginLogin backColor>
            로그인
          </Button>
          <Button type="button" onClick={() => navigate("/signup")}>
            회원가입
          </Button>
        </ButtonWrap>
        <P>회원가입하고 어썸플레이스의 다양한 서비스를 누려보세요!</P>
      </form>
    </Wrap>
  );
};

const Wrap = styled.div`
  max-width: 481px;
  height: 640px;
  border: 1px solid #9f9f9f;
  margin: 120px auto;

  @media (max-width: 576px) {
    border: none;
    margin: 0px auto;
  }
`;

const ImgWrap = styled.div`
  width: 186px;
  margin: 40px auto;
`;
const InputWrap = styled.div`
  width: 236px;
  margin: auto;
`;

const Label = styled.label`
  color: #747474;
  font-size: 14px;
  font-weight: bold;
`;
//input button 재활용 element 로 나중에 다시 만들것
const Input = styled.input`
  display: block;
  margin: ${(props: { pw: boolean }) => (props.pw ? `0px` : `0 0 35px 0`)};
  width: 236px;
  height: 30px;
  border: solid 1px #747474;
`;
const ButtonWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 217px;
  height: 32px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background: ${(props: { backColor: boolean }) =>
    props.backColor ? `#E22F2F` : `#747474`};
  border-radius: 17px;
  margin: 89px 0px 16px 0px;
  margin: ${(props: { MarginLogin: boolean }) =>
    props.MarginLogin ? `89px 0px 16px 0px` : `0px 0px 23px 0px`};
`;

const P = styled.p`
  text-align: center;
  color: #a0a0a0;
  font-size: 13px;
  font-weight: bold;
`;
export default Login;
