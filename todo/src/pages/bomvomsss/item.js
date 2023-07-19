import { useState, useRef, useCallback } from "react"; // eslint-disable-line no-unused-vars
import "../../index.css";

const TodoItem = ({todo}) => {
  const {id, text, checked} = todo;
  
  const [todos, setTodos] = useState('');
  const [selectTodo, setselectTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);

  const onRemove = useCallback((todos) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const CheckBox = () => {}
  const CheckBoxBlank = () => {}
  
  return(
    <li className="todoItem">
      <div className="{cn('checkbox', {chcked})}">
        {/* checked=true일 때 checked라는 class를 추가 (className="{cn()}"문법)*/}
        {checked ? <CheckBox/> : <CheckBoxBlank/>}
        {/* checked=true면 체크된 박스 아이콘이, false면 빈 박스 아이콘이 뜸 */}
        <div className="text">{text}</div>
      </div>
      <div className="edit">
        
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        
      </div>
    </li>
  )
}

export default TodoItem;