import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Header from "./components/Header";
import Signup from "./pages/Signup";
function App() {
  return (
    <div>
    <Header />
    <Routes>
      <Route path="signin" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
    </Routes>
    </div>
  );
}

export default App;
