import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
//components
import Home from "./components/views/Home/Home";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        

      </Routes>
    </div>
  );
}

export default App;
