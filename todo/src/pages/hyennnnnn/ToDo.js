import "./style.css";
import React from 'react';

const Todo = () => {
    return (
        <div className="todo">
            <h3></h3>
            <input type="text" name="todoItem" className="todo_item"></input>
            <button type="submit" className="add_btn">등록</button>
        </div>
    );
  }
  
  export default Todo;