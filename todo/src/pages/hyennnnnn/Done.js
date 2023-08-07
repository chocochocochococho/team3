import "./style.css";
import React from 'react';
import ToDoItemList from './ToDoItemList';

const Done = () => {
    return (
        <div className="done">
            <h3></h3>
            <div className="pink_wrap">
                <h4></h4>
                <ToDoItemList />
            </div>
        </div>
    );
  }
  
  export default Done;