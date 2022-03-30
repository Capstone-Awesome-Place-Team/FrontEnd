import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import BodyGlobal from "./shared/BodyGlobal";
import Main from "./pages/Main";
function App() {
  return (
    <div>
    <Header />
    <BodyGlobal>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path="signin" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="mypage" element={<Mypage />} />
    </Routes>
    </BodyGlobal>
    </div>
  );
}

export default App;
