import { useState, useRef, useCallback } from "react";
import "../../index.css";
import TodoCreate from "./create";
import TodoItem from "./item";
import TodoList from "./list";

const TodoApp = () => {
  return (
    <>
      <div className="viewWrap">
        <div className="header">
          Memo App
        </div>
        <div className="todoWrap">
          
        </div>
        <div className="doneWrap">

        </div>
      </div>
    </>
  );
}

export default TodoApp;