import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import Main from "./pages/Main";
import Theme from "./pages/Theme";
import Modal from "./components/main/Modal";
import RestaurantDetail from "./pages/RestaurantDetail";
import styled from "styled-components";
const App: React.FC = () => {
  const [openModal, setOpenModal] = useState(false); //나중에 contextAPI 활용해볼것
  const [games, setGames] = useState(true);
  const chooseGame = (game: string) => {
    if (game === "food") {
      setGames(true);
      setOpenModal(true);
    } else {
      setGames(false);
      setOpenModal(true);
    }
  };

  return (
    <div>
      <Header />
      <Overflow
        style={{
          height: "100vh",
          overflowY: "auto",
          overflowX: "hidden",
          scrollbarColor: "red",
        }}
        id="scrollbar"
      >
        {openModal && <Modal setOpenModal={setOpenModal} games={games} />}
        <Routes>
          <Route path="/" element={<Main chooseGame={chooseGame} />} />
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="theme_list/:theme_title" element={<Theme />} />
          <Route path="restaurant/:r_code" element={<RestaurantDetail />} />
        </Routes>
      </Overflow>
    </div>
  );
};
const Overflow = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
`;
export default App;
