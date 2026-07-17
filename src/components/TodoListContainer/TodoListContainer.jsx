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
        const newTask = {id: crypto.randomUUID(), text: task}
        const normalizedNewTask = newTask.text.trim().toLocaleLowerCase();
        
        if (taskList.length >= 9){
            setAlert("taskFull")
            return
        }

        if (taskList.some(item=> item.text.trim().toLowerCase() === normalizedNewTask)){
            setAlert("duplicate");
            return
        }    

        if (task.trim() === ""){
            setAlert("blank")
            return    
        }
        setTaskList(prev=>[...prev, newTask])
        setTask("")
    }
    function handleChange(e){
        setTask(e.target.value)
        setAlert("idle")
    }
    function handleDelete(index){
        const updatedTask = taskList.filter((_, i) => i !== index);
        setTaskList(updatedTask);
    }
    useEffect(()=>console.log(taskList),[taskList])
return (
    <section className="flex flex-col align-middle justify-start h-250 py-20 rounded-4xl border-2 border-black w-200 overflow-hidden">
        <Alert alert={alert}/>
        <form onSubmit={handleSubmit} className="mt-10">
            <InputGroup task={task} handleChange={handleChange} />
        </form>
        {/* Task List */}
        <section className="flex justify-center align-middle">
            <TaskLists taskList={taskList} index={index} handleDelete={handleDelete}/>
        </section>
    </section>
  )
}
