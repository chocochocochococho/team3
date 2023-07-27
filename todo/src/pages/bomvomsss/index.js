import "../../index.css";
import TodoItem from "./item";

const TodoApp = () => {

  return (
    <div className="viewWrap">
      <div className="header">
        Memo App
      </div>
      <div className="todoWrap">
        <TodoItem />
      </div>
    </div>
  );
}

export default TodoApp;