import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import "./assets/style/app.css";
import Foul from "./components/foul/index";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foul/:id" element={<Foul />} />
      </Routes>
    </div>
  );
}

export default App;
