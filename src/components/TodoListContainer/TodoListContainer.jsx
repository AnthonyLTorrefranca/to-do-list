import { useState, useEffect } from 'react'
import '../../index.css'
import './TodoListContainer.css'
import Alert from '../Alert/Alert.jsx'
import InputGroup from '../InputGroup/InputGroup.jsx'
import TaskLists from '../TaskLists/TaskLists.jsx'

export default function TodoListContainer() {
    const [alert, setAlert] = useState("idle")
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])
    function handleSubmit(e){
        e.preventDefault()
        if (task.trim() === ""){
            setAlert("blank")
            return
        }
        const newTask = {id: crypto.randomUUID(), text: task }
        if (taskList.some(item=> item.text.trim().toLowerCase() === newTask.text.trim().toLowerCase())){
            setAlert("duplicate");
            return
        }
        setAlert("idle")
        setTaskList(prev=>[...prev, newTask]);
        setTask("")
    }
    function handleChange(e){
        setTask(e.target.value)
        setAlert("idle")
    }
    useEffect(()=>console.log(taskList),[taskList])
return (
    <section>
        <Alert alert={alert}/>
        <form onSubmit={handleSubmit} className="mt-10">
            <InputGroup task={task} handleChange={handleChange} />
        </form>
        {/* Task List */}
        <section className="flex justify-center align-middle">
            <TaskLists taskList={taskList}  />
        </section>
    </section>
  )
}
