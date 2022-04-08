import React, { useState, useRef } from "react";
import styled from "styled-components";
import { IdCheck, PwCheck, NicknameCheck } from "../shared/regex";

//image
import example_logo from "../static/image/example_logo2.png";

const Signup: React.FC = (props) => {
  const [Id, setId] = useState();
  const [Pwd, setPwd] = useState();
  const [PwdCheck, setPwdCheck] = useState();
  const [nickName, setNickName] = useState();

  const [IdMessage, setIdMessage] = useState<string>();
  const [PwMessage, setPwMessage] = useState<string>();
  const [NickMessage, setNickMessage] = useState<string>();
  const [PwCheckMessage, setPwdChekMessage] = useState<string>();

  const [IdMessageColor, setIdMessageColor] = useState<boolean>();
  const [PwMessageColor, setPwMessageColor] = useState<boolean>();
  const [NickMessageColor, setNickMessageColor] = useState<boolean>();
  const [PwCheckMessageColor, setPwdChekMessageColor] = useState<boolean>();
  const signUp = (event: any) => {
    event.preventDefault();
    const info = {
      id: Id,
      pw: Pwd,
      nickname: nickName,
    };
    console.log(info);

    if (
      IdMessageColor &&
      PwMessageColor &&
      NickMessageColor &&
      PwCheckMessageColor
    ) {
      console.log("요청모두 맞아서 api 호출");
      // API 호출
      // dispatch(SignUpDB(info));
    }
  };
  const idCheck = (event: any) => {
    const current_id = event.target.value;
    setId(current_id);
    if (!IdCheck(current_id)) {
      setIdMessageColor(false);
      setIdMessage("1~15자리 영대소문자,숫자 사용가능");
    } else {
      setIdMessageColor(true);
      setIdMessage("규칙에 맞게 입력");
    }
  };
  const pwCheck = (event: any) => {
    const current_pw = event.target.value;
    setPwd(current_pw);
    console.log(PwCheck(current_pw));
    if (!PwCheck(current_pw)) {
      setPwMessageColor(false);
      setPwMessage("8~15자리 영대문자+숫자 조합으로 입력해주세요");
    } else {
      setPwMessageColor(true);
      setPwMessage("안전한 비밀번호");
    }
  };
  const pwDoubleCheck = (event: any) => {
    const current_pwCheck = event.target.value;
    setPwdCheck(current_pwCheck);
    if (current_pwCheck === Pwd) {
      setPwdChekMessageColor(true);
      setPwdChekMessage("일치합니다.");
    } else {
      setPwdChekMessageColor(false);
      setPwdChekMessage("불일치");
    }
  };

  const nickNameCheck = (event: any) => {
    const current_nickname = event.target.value;
    setNickName(current_nickname);
    if (!NicknameCheck(current_nickname)) {
      setNickMessageColor(false);
      setNickMessage("영대소문자,숫자,한글 사용");
    } else {
      setNickMessageColor(true);
      setNickMessage("사용가능한 닉네임입니다.");
    }
  };

  return (
    <Wrap>
      <ImgWrap>
        <img src={example_logo} alt="로고"></img>
      </ImgWrap>
      <form onSubmit={signUp}>
        <InputWrap>
          <Div>
            <Label htmlFor="Id">아이디 입력(영문/숫자)</Label>
            <Input type="text" id="Id" onChange={idCheck} pw></Input>
            <div style={{ color: IdMessageColor ? "green" : "red" }}>
              {IdMessage}
            </div>
          </Div>
          <Div>
            <Label htmlFor="nickname">닉네임</Label>

            <Input
              type="text"
              id="nickname"
              onChange={nickNameCheck}
              pw
            ></Input>
            <div style={{ color: NickMessageColor ? "green" : "red" }}>
              {NickMessage}
            </div>
          </Div>
          <Div>
            <Label htmlFor="Pwd">비밀번호 입력</Label>

            <Input type="password" id="Pwd" onChange={pwCheck} pw></Input>
            <div style={{ color: PwMessageColor ? "green" : "red" }}>
              {PwMessage}
            </div>
          </Div>
          <Div check>
            <Label htmlFor="PwdCheck">비밀번호 확인</Label>

            <Input
              type="password"
              id="PwdCheck"
              onChange={pwDoubleCheck}
              pw
            ></Input>
            <div style={{ color: PwCheckMessageColor ? "green" : "red" }}>
              {PwCheckMessage}
            </div>
          </Div>
        </InputWrap>
        <ButtonWrap>
          <Button backColor>회원가입</Button>
        </ButtonWrap>
      </form>
    </Wrap>
  );
};

const Wrap = styled.div`
  max-width: 481px;
  height: 640px;
  border: 1px solid #9f9f9f;
  margin: auto;
  @media (max-width: 576px) {
    border: none;
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

const Div = styled.div`
  height: 71px;
  height: ${(props: { check: boolean }) => (props.check ? `105px` : `71px`)};
`;

export default Signup;
