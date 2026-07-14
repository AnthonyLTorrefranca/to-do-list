import React, { useState } from 'react'
import './TodoListContainer.css'
import InputGroup from '../InputGroup/InputGroup.jsx'
import '../../index.css'

export default function TodoListContainer() {
    const [alert, setAlert] = useState("idle")
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        console.log("test")
        if (task.trim() === ""){
            setAlert("blank");
            return
        }
    }
    function handleAddTask(e){
        setTask(e.target.value)
    }
  return (
    <section className="flex flex-col items-center mt-50">
        <form onSubmit={handleSubmit}>
            <InputGroup onSubmit={handleSubmit} alert={alert} onChange={handleAddTask} />
        </form>
    </section>
  )
}
