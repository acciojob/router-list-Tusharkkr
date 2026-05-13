
import React from "react";
import './../styles/App.css';
import ItemList from "./ItemList";
import { Route, Routes } from "react-router-dom";
import ItemDetail from "./ItemDetail1";

const App = () => {

  return (
    <div>
        <Routes>
          <Route path="/" element={<ItemList/>}/>
          <Route path="/Item/:id" element={<ItemDetail/>}/>
        </Routes>
    </div>
  )
}

export default App
