import { useState, useEffect } from 'react'
import TaskAlert from '../TaskAlert.jsx'
import TaskInput from '../TaskInput.jsx'
import TaskLists from '../TaskLists.jsx'

export default function TaskListContainer() {
    const [alert, setAlert] = useState("idle");
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [editTask, setEditTask] = useState(null);

    function handleEdit(index){
        const selTask = taskList.find(item=> item.text === task)
        console.log("handleEdit", taskList)
    }
    function handleSubmit(e){
        e.preventDefault()
        const tTask = task.trim().toLowerCase();
        const newTask = {id: crypto.randomUUID(), text: tTask}
        const isDuplicate = taskList.some(item=> item.text === tTask);
        if (tTask === ""){
            setAlert("blank");
            return;
        }
        if (isDuplicate){
            setAlert("duplicate");
            return;
        }
        if (editTask !== null){
            console.log("test")
        }
        setTaskList(item=> [...item, newTask])
        setTask("")
    }
    // useEffect(()=>{console.log(taskList)}, [])
    function handleChange(e){
        setTask(e.target.value)
        setAlert("idle")
        return
    }
    function handleDelete(index){
        const updatedTask = taskList.filter(item=> item.id !== index);
        return setTaskList(updatedTask)
    }
    function handleMoveUp(index){
        const updatedTask = [...taskList]
        const taskIndex = taskList.findIndex(item=> item.id === index);
        setAlert("idle")
        console.log(taskIndex+taskList.length, taskList.length)
        if (taskIndex+taskList.length <= taskList.length){
            return setAlert("top");
        }
        if (taskIndex+taskList.length >= taskList.length){
            [updatedTask[taskIndex-1], updatedTask[taskIndex]] = [updatedTask[taskIndex], updatedTask[taskIndex-1]]
            return setTaskList(updatedTask)
        }
    }
    function handleMoveDown(id) {
        const updatedTask = [...taskList]
        const taskIndex = taskList.findIndex(item=> item.id === id);
        setAlert("idle")
        console.log(taskIndex+1, taskList.length)
        if (taskIndex+1 >= taskList.length){
            return setAlert("down");
        } 
        if (taskIndex + 2 <= taskList.length){
            [updatedTask[taskIndex+1], updatedTask[taskIndex]] = [updatedTask[taskIndex], updatedTask[taskIndex+1]]
            setTaskList(updatedTask)
            return
        }
}
return (
    <>
    <section className="flex flex-col items-center border rounded-3xl h-350 w-150 px-30 pt-10 overflow-hidden">
        <TaskAlert alert={alert} />
        <TaskInput task={task} handleChange={handleChange} handleSubmit={handleSubmit} />
        <TaskLists taskList={taskList} handleDelete={handleDelete} handleMoveUp={handleMoveUp} 
            handleMoveDown={handleMoveDown} handleEdit={handleEdit} />
    </section>
    </>
  )
}
