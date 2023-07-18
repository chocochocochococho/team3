import { useState, useRef, useCallback } from "react";
import { Reset } from "styled-reset";
import "./index.css";
import TodoCreate from "./create";
import TodoHead from "./head";
import TodoItem from "./item";
import TodoList from "./list";
import Todotemplate from "./Template";

const TodoApp = () => {
  return (
    <>
      <div className="viewWrap">
        <div className="todoWrap">
          
        </div>
        <div className="doneWrap">

        </div>
      </div>
    </>
  );
}

export default TodoApp;
