import { useState, useRef, useCallback } from "react"; // eslint-disable-line no-unused-vars
import "../../index.css";

const TodoItem = () => {
  const mockData = [
    {
      id : 1,
      todo : "산책하기",
      doen : false,
      isImportant : false,
    },
    {
      id : 2,
      todo : "수영하기",
      doen : false,
      isImportant : false,
    },
    {
      id : 3,
      todo : "달리기",
      doen : false,
      isImportant : false,
    },
  ]
  
  const [tasks, setTasks] = useState(mockData);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const handleDeleteTask = (id) => {
    const updateTask = tasks.filter((_,i) => i !== id);
    setTasks(updateTask);
  }

  return(
    <div className="itemWrap">
      <div className="inputItem">
        <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder = "입력"
        />
        <button onClick={handleAddTask}>↩</button>
      </div>
      <ul>
        {tasks.map((task, id) => (
          <li key={id}>
            {task}
            <button onClick={() => handleDeleteTask(id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
  
}

export default TodoItem;