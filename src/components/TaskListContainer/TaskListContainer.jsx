import { useState } from 'react'
import TaskAlert from '../TaskAlert.jsx'
import TaskInput from '../TaskInput.jsx'
import TaskLists from '../TaskLists.jsx'

export default function TaskListContainer() {
    const [alert, setAlert] = useState("idle")
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])

    function handleChange(e){
        setTask(e.target.value)
        setAlert("idle")
        return
    }
    function handleSubmit(e){
        e.preventDefault()
        if (task.trim() === ""){
            setAlert("blank")
            return
        }
        const newTask = {id: Date.now(), text: task}
        if (taskList.some(item=> item.text.trim().toLowerCase() === task.trim().toLowerCase())){
            setAlert("duplicate")
            return
        }
        else if (taskList.length >= 7){
            setAlert("full")
            return
        }
        setTaskList(prev=>[...prev, newTask])
        setTask("")
        console.log("test")
    }
    function handleDelete(id){
        const updatedTask = taskList.filter((item=> item.id !== id))
        setTaskList(updatedTask)
    }
    function moveUp(id){
        const updatedTask = [...taskList];
        if (updatedTask < 1){
            [updatedTask[id-1], updatedTask[1]] = [updatedTask[1], updatedTask[id-1]];
            setTaskList(updatedTask)
        }
    }
    return (
    <section className="flex flex-col items-center border rounded-3xl h-240 px-30 pt-10         overflow-hidden">
        <TaskAlert alert={alert} />
        <TaskInput task={task} handleChange={handleChange} handleSubmit={handleSubmit} />
        <TaskLists taskList={taskList} handleDelete={handleDelete} moveup={moveUp} />
    </section>
  )
}
