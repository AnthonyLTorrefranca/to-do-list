import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
    const [newTask, setNewTask] = useState("")
    const [taskHandler, setTaskHandler] = useState([])
    const handleGet = (e) => {
      setNewTask(e.target.value)
    }
    function handleAdd(e){
        e.preventDefault()
        console.log(newTask)
        if (newTask.trim() === "") { 
          alert("New task needs to contain sometin") 
          return
        }  
        setTaskHandler(prev => ([...prev, newTask]))
        setNewTask("")
    }
return (
  <section>
      <form className="todo_container" onSubmit={handleAdd}>
        <h2>Welcome back! Add your new task.</h2>
          <section className="add-task">
            <input id='createTask' type="text" 
              placeholder='Type a new task!'
              className="todo_input" value={newTask}
              name='newTask' onChange={handleGet} />
            <button type='submit'>ADD</button>
          </section>
      </form>
    <section className="taskList">
      {taskHandler.map((task, index)=>(
        <ul id={index}>
          <li key={index} className='tasks'>{task}</li>
        </ul>
      ))}
    </section>
  </section>
)}

export default Todo
