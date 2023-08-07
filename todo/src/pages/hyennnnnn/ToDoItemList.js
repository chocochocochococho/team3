import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoItemList = () => {
  return (
    <div className="todoapp_list">
      <ul className="todoapp_list_wrap">
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ul>
    </div>
  );
};

export default ToDoItemList;
