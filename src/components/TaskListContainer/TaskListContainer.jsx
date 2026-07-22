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
        const newTask = {id: crypto.randomUUID(), text: task}
        if(task.trim() === ""){
            setAlert("blank")
            return
        }

        if(taskList.some(item=> item.text.trim().toLowerCase() === task.trim().toLowerCase())){
            setAlert("duplicate")
            return
        }
        else if (taskList.length >= 8){
            setAlert("full")
            return
        }
        setTaskList(prev=>[...prev, newTask])
        setTask("")
    }
    function handleDelete(index){
        const updatedTask = taskList.filter(item=> item.id !== index);
        setTaskList(updatedTask)
    }
    function handleMoveUp(index){
        const updatedIndex = taskList.findIndex(item=> item.id === index);
        if (updatedIndex <= 0){
            setAlert("top"); return;
        }
        const updatedTask = [...taskList]
        if (updatedTask.length > updatedIndex){
            [updatedTask[updatedIndex], updatedTask[updatedIndex-1]] = [updatedTask[updatedIndex-1], updatedTask[updatedIndex]]
            setAlert("idle")
            setTaskList(updatedTask)
            return
        }
        setAlert("idle");
    }
    function handleMoveDown(index){
        const updatedIndex = taskList.findIndex(item=> item.id === index);
        const updatedTask = [...taskList];
        setAlert("idle")
        if (updatedIndex+1 >= updatedTask.length ){
            setAlert("down")
            return
        }
        [updatedTask[updatedIndex],updatedTask[updatedIndex+1]] = [updatedTask[updatedIndex+1], updatedTask[updatedIndex]]
        setTaskList(updatedTask)
        console.log("test")
    }
return (
    <section className="flex flex-col items-center border rounded-3xl h-250 w-150 px-30 pt-10 overflow-hidden">
        <TaskAlert alert={alert} />
        <TaskInput task={task} handleChange={handleChange} handleSubmit={handleSubmit} />
        <TaskLists taskList={taskList} handleDelete={handleDelete} handleMoveUp={handleMoveUp} handleMoveDown={handleMoveDown} />
    </section>
  )
}
