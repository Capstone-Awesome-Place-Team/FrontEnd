import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import BodyGlobal from "./shared/BodyGlobal";
import Main from "./pages/Main";
import Theme from "./pages/Theme";
const App: React.FC = () =>{
  return (
    <div>
    <Header />
    <div style={{height:"87vh", overflowY:"auto"}}>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path="signin" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="mypage" element={<Mypage />} />
      <Route path="theme_list/:theme_title" element={<Theme />} />
    </Routes>
    </div>
    </div>
  );
}

export default App;
