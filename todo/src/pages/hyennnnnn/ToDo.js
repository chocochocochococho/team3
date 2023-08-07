import "./style.css";
import React, { useRef, useState } from "react";
import ToDoItemList from "./ToDoItemList";
import PropTypes from 'prop-types';

const Todo = () => {
    const [text, setText] = useState('');
    const inputRef = useRef(null);  //useRef = DOM에 직접적으로 접근할 때 사용

    const onChangeInput = (e) => {  //e.target에 있는 input으로부터 value값 가져오는 메소드
        setText(e.target.value);    
    };

    const onClickAddButton = () => {    
        const nextTodoList = todoList.concat({  //todoItemList에 값 추가
            id: todoList.length,    //각 Todo 아이템마다 id라는 식별자 넣기
            text,   //각 Todo 아이템의 내용
        });
        setTodoList(nextTodoList);

        setText('');    //빈문자열 넣어 초기화
        inputRef.current.focus();   //ref.current로 input태그에 접근해 focus()로 포커싱
    };

    const [todoList, setTodoList] = useState([]);

  return (
    <div className="todo">
      <h3></h3>
      
      <div className="pink_wrap">
        <input type="text" name="todoItem" className="todo_item" value={text} ref={inputRef} placeholder="오늘 할 일 입력" onChange={onChangeInput} todoList={todoList} setTodoList={setTodoList}>

        </input>
        <button type="submit" className="add_btn" onClick={onClickAddButton}>
            등록
        </button>

        <ToDoItemList title={'할 일'} todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
};

// props 값 검증
Todo.propTypes = {
    todoList: PropTypes.arrayOf(    //props의 타입 강제하기. todoList는 배열이어야 함
        PropTypes.shape({  
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    ),
    setTodoList: PropTypes.func.isRequired,
};

export default Todo;
