import { useState, useRef, useCallback } from "react"; // eslint-disable-line no-unused-vars
import "../../index.css";
import TodoItem from "./item"; // eslint-disable-line no-unused-vars
import TodoList from "./list"; // eslint-disable-line no-unused-vars

const TodoApp = () => {

  return (
    <div className="viewWrap">
      <div className="header">
        Memo App
      </div>
      <div className="todoWrap">
        <form>  {/* method="post" */}
          <input type="text" placeholder="입력" autocomplete="off"/>
          <button>↩</button>
        </form>
      </div>
    </div>
  );
}

export default TodoApp;