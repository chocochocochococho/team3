import { useState, useRef, useCallback } from "react"; // eslint-disable-line no-unused-vars
import "../../index.css";

const TodoItemFn = () => {
    
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

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
        i === id ? {...task, task:editTask} : task
      );
      setTasks(updateTask);
      setEditMode(false);
      setEditIndex(null);
      setEditTask('');
    }else{
      setEditMode(true);
      setEditIndex(id);
      setEditTask(tasks[id].task);
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
                onChange={(e) => setEditTask(e.target.value)}
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
            <button onClick={() => handleDeleteTask(id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
  
}

export default TodoItemFn;