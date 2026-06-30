import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
    const [todo, setTodo] = useState("")
    function handleAdd(e){
        e.preventDefault()
        // console.log(object)
    }
  return (
    <section>
        <form className="todo_container" onSubmit={handleAdd}>
            <input type="text" placeholder='Type a new task!' className="todo_input" />
            <button type='submit'>ADD</button>
        </form>
      <h1></h1>
    </section>
  )
}

export default Todo
