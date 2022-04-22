import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<>Home Page</>} />
        <Route path="/shtraf/:id" element={<>Shtraf Page</>} />
      </Routes>
    </div>
  );
}

export default App;
