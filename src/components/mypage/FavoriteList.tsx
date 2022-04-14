import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { resourceLimits } from "worker_threads";
import { FavoritePropsType } from "../../types/interfaces";
import Post from "../Post";

//image
import prev from "../../static/image/arrow-prev.svg";
import next from "../../static/image/arrow-next.svg";
import arrow_drop from "../../static/image/arrow-dropdown.svg";

const FavoriteList: React.FC<FavoritePropsType> = (props) => {
  const [current_page_count, setPageCount] = useState(0); // 페이지를 넘길때마다 증가할수, 초기값 1 페이지로 시작
  const [isActive, setActive] = useState(false);
  //useSelector 로 내찜목록 정보 가져오기
  //스피너 처리 나중에할것
  const list = props.like_list;

  // 페이지 구현을위한 코드 정리
  const total_data = list.length;
  const total_page = Math.ceil(total_data / 4);
  const current_first_data = current_page_count * 4; // 해당 페이지에서 for시켜줄 첫 데이터
  const nextPage = () => {
    if (current_page_count === total_page - 1) {
      return;
    }
    setPageCount((prev) => prev + 1);
  };
  const prevPage = () => {
    if (current_page_count === 0) {
      return;
    }
    setPageCount((prev) => prev - 1);
  };

  const post = () => {
    const result = [];
    for (let i = current_first_data; i < current_first_data + 4; i++) {
      if (list[i] === undefined) {
        break;
      }

      result.push(
        <React.Fragment key={i}>
          <Post {...list[i]} />
          <hr style={{ margin: "10px", border: "1px solid #DDD" }}></hr>
        </React.Fragment>
      );
    }
    return result;
  };

  return (
    <Container minHeight={props.is_login ? true : false}>
      <div
        style={{
          display: "flex",
          padding: "10px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#E22F2F",
        }}
      >
        내 찜목록
        <div
          style={{
            width: "30px",
            position: "relative",
            // zIndex: "2",
            color: "black",
          }}
        >
          <div
            style={{
              listStyle: "none",
              // position: "relative",
              width: "100%",
              // height: "40px",
            }}
          >
            <span
              onClick={() => setActive(!isActive)}
              style={{
                display: "flex",
                border: "1px solid black",
                width: "100px",
                height: "30px",
                borderRadius: "10px",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "15px",
              }}
            >
              전체
            </span>
            <Ul className="dept01" isActive={isActive}>
              <li
                id="nop"
                style={{ borderBottom: "1px solid #9C9C9C", padding: "6px 0" }}
              >
                은평구
              </li>
              <li
                id="nop"
                style={{ borderBottom: "1px solid #9C9C9C", padding: "6px 0" }}
              >
                노원구
              </li>
              <li
                id="nop"
                style={{ borderBottom: "1px solid #9C9C9C", padding: "6px 0" }}
              >
                강남구
              </li>
              <li
                id="nop"
                style={{ borderBottom: "1px solid #9C9C9C", padding: "6px 0" }}
              >
                송파구
              </li>
            </Ul>
          </div>
        </div>
        {/* <div style={{background: `url(${arrow_drop}) no-repeat 73px 50%`  }}> */}
        {/* <select 
          style={{
            border: "2px solid #9C9C9C",
            borderRadius: "10px",
            width: "100px",
            height: "30px",
            textAlign: "center",
            fontSize: "15px",
            color: "#7C7C7C",
            fontWeight:"bold",
            background: "transparent",
            // padding: "0 50px 0 5px",
            // boxSizing:"border-box",
            appearance: "none",
            WebkitAppearance:"none",
            MozAppearance:"none",

          }}
          
        >
          <option value="all">전체</option>
          <option value="은평구">은평구</option>
          <option value="은평구">은평구</option>
          <option value="은평구">은평구</option>
          <option value="은평구">은평구</option>
          <option value="은평구">은평구</option>
          <option value="은평구">은평구</option>
          <option value="은평구">은평구</option>
          <option value="은평구">은평구</option>
          <option value="은평구">은평구</option>
          <option value="은평구">은평구</option>
          <option value="은평구">은평구</option>
          <option value="은평구">은평구</option>
          <option value="은평구">은평구</option>
          <option value="은평구">은평구</option>
          <option value="은평구">은평구</option>
          <option value="은평구">은평구</option>
        </select> */}
        {/* </div> */}
      </div>
      {props.is_login ? (
        post()
      ) : (
        <div
          style={{
            display: "flex",
            margin: "auto",
            width: "fit-content",
            height: "300px",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          로그인후 이용가능합니다
        </div>
      )}
      {/* <hr style={{width:"80%", margin:"15px 15px 0 15px"}}></hr> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "40px",
          // alignItems: "center",
        }}
      >
        <img
          src={prev}
          onClick={prevPage}
          alt="prev"
          width="16px"
          height="25px"
          style={{ margin: "0 10px" }}
        ></img>
        <img
          src={next}
          onClick={nextPage}
          alt="next"
          width="16px"
          height="25px"
          style={{ margin: "0 10px" }}
        ></img>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 528px;
  height: 75vh;
  min-height: ${(props: { minHeight: boolean }) =>
    props.minHeight ? `565px;` : null};
  max-height: 600px;
  /* text-align: center; */
  border: 2px solid #747474;
  border-top: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  border-radius: 0 0 20px 20px;
  // padding: "5px",
  margin: auto;
`;

const Ul = styled.ul`
  background: white;
  width: 100px;
  list-style: none;
  border: 1px solid #9c9c9c;
  border-radius: 10px;
  height: 100px;
  text-align: center;
  overflow-y: auto;
  display: ${(props: { isActive: boolean }) =>
    props.isActive ? "block" : "none"};
  // zIndex:"2",
  position: absolute;
  font-size: 15px;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style:none;
  ::-webkit-scrollbar {
    display:none;
  }
`;
export default FavoriteList;
