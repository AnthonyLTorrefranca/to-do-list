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
    }
    function handleDelete(index){
        const updatedTask = taskList.filter((item) => item.id !== index);
        setTaskList(updatedTask)
    }
    function handleMoveUp(id){
        const currentIndex = taskList.findIndex((task) => task.id === id);
        if(currentIndex <= 0) return;
            const newList = [...taskList];
            [newList[currentIndex], newList[currentIndex - 1]] = [newList[currentIndex - 1], newList[currentIndex]];
            setTaskList(newList);
    }
function handleMoveDown(id){
    const currentIndex = taskList.findIndex((task) => task.id === id);
    if (currentIndex < 0 || currentIndex >= taskList.length - 1){ 
        setAlert("down")
        return;
    }
    const newList = [...taskList];
    [newList[currentIndex], newList[currentIndex + 1]] =
        [newList[currentIndex + 1], newList[currentIndex]];
    setTaskList(newList);
}
return (
    <section className="flex flex-col items-center border rounded-3xl h-240 w-150 px-30 pt-10 overflow-hidden">
        <TaskAlert alert={alert} />
        <TaskInput task={task} handleChange={handleChange} handleSubmit={handleSubmit} />
        <TaskLists taskList={taskList} handleDelete={handleDelete} handleMoveUp={handleMoveUp} handleMoveDown={handleMoveDown} />
    </section>
  )
}
