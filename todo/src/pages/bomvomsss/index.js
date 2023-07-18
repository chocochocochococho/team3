import { useState, useRef, useCallback } from "react"; // eslint-disable-line no-unused-vars
import "../../index.css";
import TodoCreate from "./create"; // eslint-disable-line no-unused-vars
import TodoItem from "./item"; // eslint-disable-line no-unused-vars
import TodoList from "./list"; // eslint-disable-line no-unused-vars

// https://velog.io/@soonmac/React-%EA%B0%84%EB%8B%A8%ED%95%9C-%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0

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