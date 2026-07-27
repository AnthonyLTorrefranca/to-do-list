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
        setEditTask(true);
        const selectedTask = taskList.find(item=> item.id === index);
        setEditTask(selectedTask.id)
        setTask(selectedTask.text)
    }
    function handleSubmit(e){
        e.preventDefault()
        const tTask = task.trim().toLowerCase();
        const isDuplicate = taskList.some(item=> item.text === tTask && item.id === editTask);
        const newTask = {id: crypto.randomUUID(), text: task};
        if (tTask === ""){
            setAlert("blank")
            return
        }
        if (isDuplicate){
            setAlert("duplicate");
            return;
        }
        if (editTask !== null){
            setTaskList(prev=> prev.map(item=> item.id === editTask ? {item, text: newTask.text} : item))
            setEditTask(null)
            setTask("");
            return;
        }
        // console.log(taskList)
        setTaskList(prev=> [...prev, newTask])
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
        setTaskList(updatedTask);
        return
    }
    function handleMoveUp(index){
        null
    }
    function handleMoveDown(index){
        null
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
