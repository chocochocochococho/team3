import { useState, useRef, useCallback } from "react"; // eslint-disable-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoApp from "./pages/bomvomsss/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoApp />}/>
        {/* <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/> */}
      </Routes>
      <div className="viewWrap">
        <div className="todoWrap">
          
        </div>
        <div className="doneWrap">

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;