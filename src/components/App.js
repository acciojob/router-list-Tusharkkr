
import React from "react";
import './../styles/App.css';
import ItemList from "./ItemList";
import { Route, Routes } from "react-router-dom";
import ItemDetail1 from "./ItemDetail1";
import ItemDetail2 from "./ItemDetail2";
import ItemDetail3 from "./ItemDetail3";

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<ItemList/>}/>
          <Route path="/Item/:id" element={<ItemDetail1/>}/>
          <Route path="/Item/:id" element={<ItemDetail2/>}/>
          <Route path="/Item/:id" element={<ItemDetail3/>}/>
        </Routes>
    </div>
  )
}

export default App
