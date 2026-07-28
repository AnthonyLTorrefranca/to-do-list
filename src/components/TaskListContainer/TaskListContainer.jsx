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
        setAlert("idle")
        const selectedTaskInd = taskList.findIndex(item=> item.id === index);
        const selectedTaskText = taskList[selectedTaskInd].text;
        setEditTask(selectedTaskInd.id)
        setTask(selectedTaskText);
        console.log("handleEdit", selectedTaskInd, selectedTaskText)
    }
    function handleSubmit(e){
        e.preventDefault()
        const tTask = task.trim().toLowerCase();
        const isDuplicate = taskList.some(item=> item.text === tTask && item.id === index);
        const newTask = {id: crypto.randomUUID(), text: tTask};
        if (tTask === ""){
            return setAlert("blank");
        }
        if (isDuplicate){
            return setAlert("duplicate");
        }
        if (editTask !== null){
            setTaskList(prev=> prev.map(item=> item.id === index ? {...item, text: tTask} : item))
            setEditTask(null)
            return setTask("")
        }
        setTaskList(prev=> [...prev, newTask])
        setTask("")
        console.log("handlesubmit", taskList)
    }
    // useEffect(()=>{console.log(taskList)}, [taskList])
    function handleCancel(){
        setEditTask(null);
        setAlert("cancelled");
        setTask("")
    }
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
        // console.log(taskIndex+taskList.length, taskList.length)
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
        // console.log(taskIndex+1, taskList.length)
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
        <TaskInput task={task} handleChange={handleChange} handleSubmit={handleSubmit} editTask={editTask} handleCancel={handleCancel} />
        <TaskLists taskList={taskList} handleDelete={handleDelete} handleMoveUp={handleMoveUp} 
            handleMoveDown={handleMoveDown} handleEdit={handleEdit} />
    </section>
    </>
  )
}
