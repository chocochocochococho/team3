import { useState, useRef, useCallback } from "react"; // eslint-disable-line no-unused-vars
import "../../index.css";
import TodoCreate from "./create"; // eslint-disable-line no-unused-vars
import TodoItem from "./item"; // eslint-disable-line no-unused-vars
import TodoList from "./list"; // eslint-disable-line no-unused-vars

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