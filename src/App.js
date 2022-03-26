import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Header from "./components/Header";
function App() {
  return (
    <div>
    <Header />
    <Routes>
      <Route path="signin" element={<Login />}></Route>
    </Routes>
    </div>
  );
}

export default App;
