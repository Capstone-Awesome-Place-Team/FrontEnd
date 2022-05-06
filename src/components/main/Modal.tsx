import React, { useState } from "react";
import ChooseFood from "./ChooseFood";
import RandomGame from "./RandomGame";
import close_line from "../../static/image/close-line2.svg";
const Modal: React.FC<{ setOpenModal: Function; games: boolean }> = ({
  setOpenModal,
  games,
}) => {
  return (
    <div
      className="modalBackground"
      style={{
        width: "720px",
        height: "100vh",
        backgroundColor: "rgba(0,0,0, 0.5)",
        position: "fixed",
        // top: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "99",
      }}
    >
      <div
        className="modalContainer"
        style={{
          width: "330px",
          height: "506px",
          borderRadius: "55px",
          backgroundColor: "#EAEAEA",
          boxShadow: "rgba(0,0,0, 0.35) 0 5px 15px",
          // display: "flex",
          // flexDirection:"column",
          padding: "18px", // 모달창안의 여백
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <button
            onClick={() => setOpenModal(false)}
            style={{
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <img src={close_line} alt=""></img>
          </button>
        </div>
        {games === true && <ChooseFood />}
        {games === false && <RandomGame />}
      </div>
    </div>
  );
};

export default Modal;
