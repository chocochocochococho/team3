import { useState, useRef, useCallback } from "react"; // eslint-disable-line no-unused-vars
import "../../index.css";

const TodoItem = () => {
    
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, seteditIndex] = useState(null);

  const handleAddTask = () => {
    if(newTask.trim() !== ''){
      setTasks([...tasks, { task:newTask, completed: false}]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (id) => {
    const updateTask = tasks.filter((_,i) => i !== id);
    setTasks(updateTask);
  }

  const handleCheckTask = (id) => {
    const updateTask = tasks.map((task, i) => 
      i === id ? {...task, completed: !task.completed } : task
    );
    setTasks(updateTask);
  }

  const handleUpdateTask = (id) => {
    if(editMode){
      const updateTask = tasks.map((task, i) => 
        i === id ? {...task, edit: !task.edit} : task
      );
      setTasks(updateTask);
      setEditTask('');
      setEditMode(false);
      seteditIndex(id);
    }else{
      seteditIndex(null);
      setEditTask('');
      setEditTask('');
    }
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
            <button onClick={() => handleCheckTask(id)}>
              {task.completed ? '✅' : '⬜'}
            </button>
            {editMode && id === editIndex ? (
              <input
                type="text"
                value={editTask}
                onChange={(e) => setNewTask(e.target.value)}
                autoFocus
              />
            ):(
              <span 
                style={{textDecoration: task.completed ? 'line-through' : 'none',}}
              >
                {task.task}
              </span>
            )}
            <button onClick={() => handleUpdateTask(id)}>수정</button>
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