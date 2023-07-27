import "./style.css";
import React from 'react';
import ToDo from './ToDo.js';
import Done from './Done.js';


const TodoApp02 = () => {
  return (
    <>
      <div className="viewWrap">
        <h2></h2>

        <div className="list">
          <ToDo />  {/** 할 일 list */}
          <Done />  {/** 완료 list */}
        </div>
      
      </div>
    </>
  );
}

export default TodoApp02;
