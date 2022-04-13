import React, { useState } from "react";
import styled from "styled-components";
import { actionCreators as favoriteActions } from "../../redux/modules/favorite";
import { IdCheck, PwCheck, NicknameCheck } from "../../shared/regex";
import { Edit_info } from "../../types/interfaces";

import edit_button from "../../static/image/edit_button.svg";
import edit_enter from "../../static/image/edit_enter.svg";
import edit_cancel from "../../static/image/edit_cancel.svg";
import me_edit from "../../static/image/me_edit.png";
import { useDispatch } from "react-redux";

const Editprofile: React.FC<Edit_info> = (props) => {
 
  const dispatch = useDispatch();
  const [Pwd, setPwd] = useState<string>();
  // const [PwdCheck, setPwdCheck] = useState();
  
  const [changingNickName, setChangingNickName] = useState<string>(); // 취소시 기존껄로 돌아가기위해 닉네임관련 변수 하나더 쓰는것

  const [PwMessage, setPwMessage] = useState<string>();
  const [NickMessage, setNickMessage] = useState<string>();
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
    console.log(PwCheck(current_pw));
    if (!PwCheck(current_pw)) {
      setPwMessageColor(false);
      setPwMessage("8~15자리 영대문자+숫자 조합으로 입력해주세요");
    } else {
      setPwMessageColor(true);
      setPwMessage("안전한 비밀번호");
    }
  };
  const pwDoubleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const current_pwCheck = event.target.value;
    // setPwdCheck(current_pwCheck);
    if (current_pwCheck === Pwd) {
      setPwdChekMessageColor(true);
      setPwdChekMessage("일치합니다.");
    } else {
      setPwdChekMessageColor(false);
      setPwdChekMessage("불일치");
    }
  };

  const nickNameCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const current_nickname = event.target.value;
    setChangingNickName(current_nickname);
    if (!NicknameCheck(current_nickname)) {
      setNickMessageColor(false);
      setNickMessage("영대소문자,숫자,한글 사용");
    } else {
      setNickMessageColor(true);
      setNickMessage("사용가능한 닉네임입니다.");
    }
  };

  const resetAll = () => {
    setPwd("");
    setChangingNickName("");
    setNickMessageColor(false);
    setPwMessageColor(false);
    setPwdChekMessageColor(false);
    setNickMessage("");
    setPwMessage("");
    setPwdChekMessage("");
    setIsEdit(!isEdit); // 버튼 true/false
  };

  return (
    <Container>
      <Wrap>
        <div className="nickName">
          <Label htmlFor="nickname">내 닉네임</Label>
          <br />
          {isEdit ? (
            <>
              <input
                type="text"
                id="nickname"
                defaultValue=""
                onChange={nickNameCheck}
              ></input>

              <div style={{ color: NickMessageColor ? "green" : "red" }}>
                {NickMessage}
              </div>
            </>
          ) : (
            <div
              style={{ color: "blue", fontWeight: "bold", fontSize: "20px" }}
            >
              {props.nickname}
            </div>
          )}
        </div>
        {isEdit ? (
          <>
            <div className="PwdInput">
              <Label htmlFor="Pwd">비밀번호</Label>
              <br />
              <input type="password" id="Pwd" onChange={pwCheck}></input>
              <div style={{ color: PwMessageColor ? "green" : "red" }}>
                {PwMessage}
              </div>
            </div>
            <div className="PwdCheckInput">
              <Label htmlFor="PwdCheck">비밀번호 확인</Label>
              <br />
              <input
                type="password"
                id="PwdCheck"
                onChange={pwDoubleCheck}
              ></input>
              <div style={{ color: PwCheckMessageColor ? "green" : "red" }}>
                {PwCheckMessage}
              </div>
            </div>
          </>
        ) : null}
        {isEdit ? (
          <div>
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
            style={{ border: "none", background: "none" }}
          >
            <img src={me_edit} alt="edit" />
          </button>
        )}
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div`
  & input {
    height: 47px;
    width: 269px;
    border: 1px solid #c1c1c1;
    background: #f0f0f0;
    border-radius: 22px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin: 5px 0px;
    padding: 0px 10px;
    box-sizing: border-box;
  }
  & button {
    margin: 5px;
  }
`;

const Container = styled.div`
  width: 528px;
  height: 75vh;
  text-align: center;
  border: 2px solid #747474;
  border-top: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  border-radius: 0 0 20px 20px;
  // padding: "5px",
  margin: auto;
`;

const Label = styled.label`
  font-size: 20px;
  color: #747474;
  font-weight: bold;
`;

export default Editprofile;
