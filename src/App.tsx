// import React from "react";
import Navbar from "./components/Footer";
import Home from "./components/Home";
import OnOff from "./components/OnOff";
import TicTacToe from "./components/Tictactoe";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onoff" element={<OnOff />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
    </>
  );
};

export default App;
