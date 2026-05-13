
import React from "react";
import './../styles/App.css';
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import One from "./one";
import Two from "./two";
import Three from "./three";

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/Item/1" element={<One/>}/>
          <Route path="/Item/2" element={<Two/>}/>
          <Route path="/Item/3" element={<Three/>}/>
        </Routes>
    </div>
  )
}

export default App
