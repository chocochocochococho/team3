import { useState, useRef, useCallback } from "react"; // eslint-disable-line no-unused-vars
import "../../index.css";
import TodoItem from "./item"

const [todos, setTodos] = useState([
  {
    id: 1,
    text: '1번 항목',
    checked: true,
  },
  {
    id: 2,
    text: '2번 항목',
    checked: true,
  },
  {
    id: 3,
    text: '3번 항목',
    checked: false,
  },
]);

const TodoList = (todos) => {
  return(
    <ul className="todoList">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
        />
      ))}
    </ul>
  )
}

export default TodoList;