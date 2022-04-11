import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IdCheck, PwCheck, NicknameCheck } from "../shared/regex";
import { actionCreators as userActions } from "../redux/modules/users";
import { RootState } from "../redux/configStore";
//image
import example_logo from "../static/image/example_logo2.png";
import back_arrow from "../static/image/back_arrow.svg";

type Info = {
  id: string;
  pw: string;
  nickname: string;
};

const Signup: React.FC = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Id, setId] = useState<string>();
  const [Pwd, setPwd] = useState<string>();
  const [PwdCheck, setPwdCheck] = useState<string>("");
  const [nickName, setNickName] = useState<string>();

  const [IdMessage, setIdMessage] = useState<string>(
    "영문,숫자 15자 이내로 입력해주세요"
  );
  const [PwMessage, setPwMessage] = useState<string>(
    "영대소문자, 숫자, 조합 8~15자로 입력해주세요."
  );
  const [NickMessage, setNickMessage] = useState<string>(
    "한글, 영문, 숫자 15자 이내로 입력해주세요."
  );
  const [PwCheckMessage, setPwdChekMessage] = useState<string>();

  const [IdMessageColor, setIdMessageColor] = useState<boolean>();
  const [PwMessageColor, setPwMessageColor] = useState<boolean>();
  const [NickMessageColor, setNickMessageColor] = useState<boolean>();
  const [PwCheckMessageColor, setPwdChekMessageColor] = useState<boolean>();

  const signUp = (event: any) => {
    event.preventDefault();
    const info: Info = {
      id: Id!,
      pw: Pwd!,
      nickname: nickName!,
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
      dispatch(userActions.SignUpDB(info, navigate));
    }
  };
  const idCheck = (event: any) => {
    const current_id = event.target.value;
    setId(current_id);
    if (current_id.length < 1) {
      setIdMessage("영문,숫자 15자 이내로 입력해주세요");
    } else if (!IdCheck(current_id)) {
      setIdMessageColor(false);
      setIdMessage("유효하지않은 아이디입니다. 다시 입력해주세요.");
    } else {
      setIdMessageColor(true);
      setIdMessage("사용능한 아이디입니다.");
    }
  };
  const pwCheck = (event: any) => {
    const current_pw = event.target.value;
    setPwd(current_pw);
    //비밀번호 다시 입력시 비밀번호확인 초기화
    setPwdCheck("");
    setPwdChekMessage("");
    setPwdChekMessageColor(false);
   
    if (current_pw.length < 1) {
      setPwMessage("영대소문자, 숫자, 조합 8~15자로 입력해주세요.");
    } else if (!PwCheck(current_pw)) {
      setPwMessageColor(false);
      setPwMessage("유효하지않은 비밀번호입니다.");
    } else {
      setPwMessageColor(true);
      setPwMessage("사용가능한 비밀번호입니다");
    }
  };
  const pwDoubleCheck = (event: any) => {
    const current_pwCheck = event.target.value;
    setPwdCheck(current_pwCheck);
    if (current_pwCheck < 1) {
      setPwdChekMessage("");
      setPwdChekMessageColor(false);
    } else if (current_pwCheck === Pwd) {
      setPwdChekMessageColor(true);
      setPwdChekMessage("비밀번호가 동일합니다");
    } else {
      setPwdChekMessageColor(false);
      setPwdChekMessage("비밀번호가 일치하지 않습니다");
    }
  };

  const nickNameCheck = (event: any) => {
    const current_nickname = event.target.value;
    setNickName(current_nickname);
    if (current_nickname.length < 1) {
      setNickMessage("한글, 영문, 숫자 15자 이내로 입력해주세요");
    } else if (!NicknameCheck(current_nickname)) {
      setNickMessageColor(false);
      setNickMessage("유효하지않은 닉네임입니다.");
    } else {
      setNickMessageColor(true);
      setNickMessage("사용가능한 닉네임입니다.");
    }
  };

  return (
    <Wrap>
      <img
        src={back_arrow}
        alt="뒤로가기"
        onClick={() => navigate("/signin")}
        style={{ margin: "15px 0 0 15px" }}
      ></img>
      <ImgWrap>
        <img src={example_logo} alt="로고"></img>
      </ImgWrap>
      <form onSubmit={signUp}>
        <InputWrap>
          <Div>
            <Label htmlFor="Id">아이디 입력(영문/숫자)</Label>
            <Input type="text" id="Id" onChange={idCheck} pw></Input>
            {Id ? (
              <div
                style={{
                  color: IdMessageColor ? "#59B200" : "#E22F2F",
                  fontSize: "10px",
                  fontWeight: "bold",
                  textAlign: "right",
                }}
              >
                {IdMessage}
              </div>
            ) : (
              <div
                style={{
                  color: "#A0A0A0",
                  fontSize: "10px",
                  fontWeight: "bold",
                  textAlign: "right",
                }}
              >
                {IdMessage}
              </div>
            )}
          </Div>
          <Div>
            <Label htmlFor="nickname">닉네임</Label>

            <Input
              type="text"
              id="nickname"
              onChange={nickNameCheck}
              pw
            ></Input>
            {nickName ? (
              <div
                style={{
                  color: NickMessageColor ? "#59B200" : "#E22F2F",
                  fontSize: "10px",
                  fontWeight: "bold",
                  textAlign: "right",
                }}
              >
                {NickMessage}
              </div>
            ) : (
              <div
                style={{
                  color: "#A0A0A0",
                  fontSize: "10px",
                  fontWeight: "bold",
                  textAlign: "right",
                }}
              >
                {NickMessage}
              </div>
            )}
          </Div>
          <Div>
            <Label htmlFor="Pwd">비밀번호</Label>

            <Input type="password" id="Pwd" onChange={pwCheck} pw></Input>
            {Pwd ? (
              <div
                style={{
                  color: PwMessageColor ? "#59B200" : "#E22F2F",
                  fontSize: "10px",
                  fontWeight: "bold",
                  textAlign: "right",
                }}
              >
                {PwMessage}
              </div>
            ) : (
              <div
                style={{
                  color: "#A0A0A0",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                {PwMessage}
              </div>
            )}
          </Div>
          <Div check>
            <Label htmlFor="PwdCheck">비밀번호 확인</Label>

            <Input
              type="password"
              id="PwdCheck"
              onChange={pwDoubleCheck}
              value={PwdCheck}
              pw
            ></Input>
            <div
              style={{
                color: PwCheckMessageColor ? "#59B200" : "#E22F2F",
                fontSize: "10px",
                fontWeight: "bold",
                textAlign: "right",
              }}
            >
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
  margin: 7px auto;
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
