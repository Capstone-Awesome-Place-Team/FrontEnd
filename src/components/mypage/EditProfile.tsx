import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as favoriteActions } from "../../redux/modules/favorite";
import { actionCreators as userActions } from "../../redux/modules/users";
import { IdCheck, PwCheck, NicknameCheck } from "../../shared/regex";
import { Edit_info } from "../../types/interfaces";

import edit_button from "../../static/image/edit_button.svg";
import edit_enter from "../../static/image/edit_enter.svg";
import edit_cancel from "../../static/image/edit_cancel.svg";
import me_edit from "../../static/image/me_edit.png";
import { useNavigate } from "react-router-dom";

const Editprofile: React.FC<Edit_info> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const is_login = localStorage.getItem("token");
  const [Pwd, setPwd] = useState<string>();
  const [PwdCheck, setPwdCheck] = useState<string>();

  const [changingNickName, setChangingNickName] = useState<string>(); // 취소시 기존껄로 돌아가기위해 닉네임관련 변수 하나더 쓰는것

  const [PwMessage, setPwMessage] = useState<string>(
    "영대소문자, 숫자 조합 8~15자 이내로 입력해주세요."
  );
  const [NickMessage, setNickMessage] = useState<string>(
    "한글, 영문, 숫자 15자 이내로 입력해주세요."
  );
  const [PwCheckMessage, setPwdChekMessage] = useState<string>();

  const [PwMessageColor, setPwMessageColor] = useState<boolean>();
  const [NickMessageColor, setNickMessageColor] = useState<boolean>();
  const [PwCheckMessageColor, setPwdChekMessageColor] = useState<boolean>();

  const [isEdit, setIsEdit] = useState(false);

  //나중에 useSelector 로 내정보 관련정보 가져오기
  //스피너 처리 나중에할것
  const edit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (PwMessageColor && NickMessageColor && PwCheckMessageColor) {
      console.log("요청모두 맞아서 api 호출");

      // 이부분 리덕스로 사용할경우 비즈니스로직 바꿔야됨, useState로 사용안하고 useSelector로 store 값 쓰기때문에 이중으로 nickname, changingNickName으로 안써도됨
      // setNickName(changingNickName!); // 실질적으로 내정보에서 보는 닉네임으로 최종 변경
      const info = {
        pw: Pwd,
        nickname: changingNickName,
      };
      // API 호출
      dispatch(favoriteActions.editInfoDB(info)); // 닉네임, 비밀번호
      resetAll();
      console.log(info, changingNickName);
    }
  };

  const pwCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const current_pw = event.target.value;
    setPwd(current_pw);
    //비밀번호 다시 입력시 비밀번호확인 초기화
    setPwdCheck("");
    setPwdChekMessage("");
    if (current_pw.length < 1) {
      setPwMessage("8~15자리 영대문자+숫자 조합으로 입력해주세요.");
    } else if (!PwCheck(current_pw)) {
      setPwMessageColor(false);
      setPwMessage("유효하지않은 비밀번호입니다.");
    } else {
      setPwMessageColor(true);
      setPwMessage("사용가능한 비밀번호입니다.");
    }
  };
  const pwDoubleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const current_pwCheck = event.target.value;
    setPwdCheck(current_pwCheck);
    if (current_pwCheck.length < 1) {
      setPwdChekMessage("");
    } else if (current_pwCheck === Pwd) {
      setPwdChekMessageColor(true);
      setPwdChekMessage("비밀번호가 동일합니다.");
    } else {
      setPwdChekMessageColor(false);
      setPwdChekMessage("비밀번호가 일치하지 않습니다.");
    }
  };

  const nickNameCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const current_nickname = event.target.value;
    setChangingNickName(current_nickname);
    if (current_nickname.length < 1) {
      setNickMessage("한글, 영문, 숫자 15자 이내로 입력해주세요.");
    } else if (!NicknameCheck(current_nickname)) {
      setNickMessageColor(false);
      setNickMessage("유효하지않은 닉네임입니다.");
    } else {
      setNickMessageColor(true);
      setNickMessage("사용가능한 닉네임입니다.");
    }
  };

  const resetAll = () => {
    setPwd("");
    setChangingNickName("");
    setPwdCheck("");
    setNickMessageColor(false);
    setPwMessageColor(false);
    setPwdChekMessageColor(false);
    setPwdChekMessage("");
    setNickMessage("한글, 영문, 숫자 15자 이내로 입력해주세요.");
    setPwMessage("8~15자리 영대문자+숫자 조합으로 입력해주세요.");
    setIsEdit(!isEdit); // 버튼 true/false
  };
  // 나중에 isEdit 부분을 한번에 묶어서 정리할것 너무 각각의 태그조건일대 하는데 결국 내가 수정버튼을 눌렀나 안눌렀나에 따라 달라지는거니
  return (
    <Container
      textAlign={isEdit ? false : true}
      alignItems={isEdit ? false : true}
      justifyContent={isEdit ? false : true}
    >
      {is_login ? (
        <Wrap>
          {isEdit ? (
            <div
              style={{
                color: "#E22F2F",
                fontSize: "25px",
                fontWeight: "bold",
                margin: "64px 0 0",
              }}
            >
              내 정보 수정
            </div>
          ) : null}
          <Label
            htmlFor="nickname"
            style={{ display: "block", margin: "20px 0 0 10px" }}
          >
            내 닉네임
          </Label>

          {isEdit ? (
            <>
              <input
                type="text"
                id="nickname"
                defaultValue=""
                onChange={nickNameCheck}
                style={{ margin: "10px 0 7px" }}
              ></input>
              {changingNickName ? (
                <div
                  style={{
                    color: NickMessageColor ? "#59B200" : "#E22F2F",
                    fontSize: "13px",
                    fontWeight: "bold",
                    margin: "0 0 19px 10px",
                  }}
                >
                  {NickMessage}
                </div>
              ) : (
                <div
                  style={{
                    color: "#A0A0A0",
                    fontSize: "13px",
                    fontWeight: "bold",
                    margin: "0 0 19px 10px",
                  }}
                >
                  {NickMessage}
                </div>
              )}
            </>
          ) : (
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  margin: "32px 0 0 0",
                  border: "1px solid black",
                  width: "fit-content",
                  padding: "3px",
                }}
              >
                {props.nickname}
              </div>
            </div>
          )}

          {isEdit ? (
            <>
              <Label htmlFor="Pwd" style={{ margin: "0 0 10px 10px" }}>
                내 비밀번호
              </Label>
              <br />
              <input
                type="password"
                id="Pwd"
                onChange={pwCheck}
                style={{ margin: "10px 0 7px" }}
              ></input>
              {Pwd ? (
                <div
                  style={{
                    color: PwMessageColor ? "#59B200" : "#E22F2F",
                    fontSize: "13px",
                    fontWeight: "bold",
                    margin: "0 0 20px",
                  }}
                >
                  {PwMessage}
                </div>
              ) : (
                <div
                  style={{
                    color: "#A0A0A0",
                    fontSize: "13px",
                    fontWeight: "bold",
                    margin: "0 0 20px",
                  }}
                >
                  {PwMessage}
                </div>
              )}

              <div className="PwdCheckInput">
                <Label htmlFor="PwdCheck" style={{ margin: "0 0 0 10px" }}>
                  비밀번호 확인
                </Label>
                <br />
                <input
                  type="password"
                  id="PwdCheck"
                  onChange={pwDoubleCheck}
                  value={PwdCheck}
                  style={{ margin: "10px 0 7px" }}
                ></input>
                <div style={{ color: PwCheckMessageColor ? "green" : "red" }}>
                  {PwCheckMessage}
                </div>
              </div>
            </>
          ) : null}
          {isEdit ? (
            <div
              style={{ margin: "50px 0", position: "absolute", bottom: "0px" }}
            >
              <button
                onClick={edit}
                style={{ border: "none", background: "none" }}
              >
                <img src={edit_enter} alt="edit_enter" />
              </button>
              <button
                onClick={resetAll}
                style={{ border: "none", background: "none" }}
              >
                <img src={edit_cancel} alt="edit" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEdit(!isEdit)}
              style={{
                border: "none",
                background: "none",
                margin: "69px 0 90px 0",
              }}
            >
              <img src={me_edit} alt="edit" />
            </button>
          )}
          {isEdit ? null : ( // 나중에 토큰 여부 나중에 전체 조건으로 주기, 토큰이 있다면 내정보가 보이게
            <div
              style={{ color: "#747474", fontSize: "15px", fontWeight: "bold" }}
              onClick={() => dispatch(userActions.Logout(navigate))}
            >
              로그아웃
            </div>
          )}
        </Wrap>
      ) : (
        <div>로그인후 이용가능합니다.</div>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 528px;
  height: 75vh;
  min-height: 565px;
  max-height: 600px;
  text-align: ${(props: { textAlign: boolean }) =>
    props.textAlign ? `center;` : null};
  align-items: ${(props: { alignItems: boolean }) =>
    props.alignItems ? `center;` : null};
  justify-content: center;
  border: 2px solid #747474;
  border-top: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  border-radius: 0 0 20px 20px;
  // padding: "5px",
  margin: auto;
`;

const Wrap = styled.div`
  & input {
    height: 47px;
    width: 269px;
    border: 1px solid #c1c1c1;
    background: #f0f0f0;
    border-radius: 22px;
    /* box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25); */
    margin: 5px 0px;
    padding: 0px 10px;
    box-sizing: border-box;
  }
  & button {
    margin: 0 5px;
  }
`;

const Label = styled.label`
  font-size: 20px;
  color: #747474;
  font-weight: bold;
`;

export default Editprofile;
