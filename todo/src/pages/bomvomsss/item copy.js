import { useState, useRef, useCallback } from "react"; // eslint-disable-line no-unused-vars
import "../../index.css";

const TodoItem = () => {
    
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if(newTask.trim() !== ''){
      if(editMode){
        const updateTask = tasks.map((task, id) => 
          id === editIndex ? {...task, task:newTask} : task
        );
        setTasks(updateTask);
        setNewTask('');
        setEditMode(false);
      }else{
        setTasks([...tasks, { task:newTask, completed: false}]);
        setNewTask('');
      }
    }
  };
  
  const handleCheckTask = (id) => {
    const updateTask = tasks.map((task, i) => 
    i === id ? {...task, completed: !task.completed } : task
    );
    setTasks(updateTask);
  }
  
  const handleDeleteTask = (id) => {
    const updateTask = tasks.filter((_,i) => i !== id);
    setTasks(updateTask);
  }

  const handleEditTask = (id) => {
    setEditMode(true);
    setEditIndex(id);
    setNewTask(tasks[id].task);
  }

  const handleCancleEdit = () => {
    setEditMode(false);
    setEditIndex(null);
    setNewTask('');
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
            {editMode && id === editIndex ? (
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                autoFocus
              />
            ) : (
              <span
                style={{textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {task.task}
              </span>
            )}
            {editMode && id === editIndex ? (
              <>
                <button onClick={() => handleAddTask()}>Save</button>
                <button onClick={handleCancleEdit}>Cancel</button>
              </>
            ):(
              <>
                <button onClick={() => handleCheckTask(id)}>
                  {task.completed ? '✅' : '⬜'}
                </button>
                <button onClick={() => handleEditTask(id)}>Edit</button>
                <button onClick={() => handleDeleteTask(id)}>❌</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoItem;