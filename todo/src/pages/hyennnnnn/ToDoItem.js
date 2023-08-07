import React from "react";

const ToDoItem = () => {
  return (
    <li className="todoapp_item">
      <div className="left_area">
        <input type="checkbox" className="todoapp_item_chk"></input>
        <span className="todoapp_item_cont">퇴근</span>
      </div>
      <div className="right_area">
        <button type="button" className="todoapp_item_edit">
            ✏️
        </button>
        <button type="button" className="todoapp_item_delete">
            🗑️
        </button> 
      </div>
    </li>
  );
};

export default ToDoItem;
