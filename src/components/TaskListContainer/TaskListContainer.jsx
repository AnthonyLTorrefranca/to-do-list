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
        const selectedTask = taskList.find(item => item.id === index);
        if (!selectedTask) return;
        setEditTask(selectedTask.id)
        setTask(selectedTask.text)
        setAlert("idle")
    } // handles the submit
    function handleSubmit(e){
        e.preventDefault()
        console.log(editTask)
        const tTask = task.trim()
        const isDuplicate = taskList.some(item => item.text === tTask && item.id !== editTask);
        // checks if input is blank
        if (tTask === ""){
            setAlert("blank");
            return;
        } // checks for dup
        if (isDuplicate){
            setAlert("duplicate");
            return;
        } // edit the task that won't append new one
        // unfinished task
        if (editTask !== null){
            setTaskList(prevTask => 
                prevTask.map(item => item.id === editTask ? {...item, text: tTask} : item)
            );
            setEditTask(null);
            setTask("")
        }

        // if (editTask !== null){
        //     setTaskList(prevTask=> 
        //         prevTask.map(item=> item.id === editTask ? {...item, text: tTask} : item)
        //     )
        //     setEditTask(null)
        //     setTask("")
        //     return;
        // }

        const mTask = {id: crypto.randomUUID(), text: tTask}
        setTaskList(prev=> [...prev, mTask])
        console.log(mTask)
        setTask("")
    }
    // handles the changes on input 
    function handleChange(e){
        setTask(e.target.value)
        setAlert("idle")
        return
    } // handles the deletion
    function handleDelete(index){
        console.log("handleDelete")
        const updatedTask = taskList.filter(item=> item.id !== index)
        setTaskList(updatedTask);
    } // handles move up
    function handleMoveUp(index){
    const updatedIndex = taskList.findIndex(item=> item.id === index);
    if (updatedIndex <= 0){
        setAlert("top"); 
        setTimeout(()=>{
            setAlert("idle");
        },1500)
        return;
    }
    const updatedTask = [...taskList]
    if (updatedTask.length > updatedIndex){
        [updatedTask[updatedIndex], updatedTask[updatedIndex-1]] = [updatedTask[updatedIndex-1], updatedTask[updatedIndex]]
        setAlert("idle")
        setTaskList(updatedTask)
        return
    }
    } // handles move down
    function handleMoveDown(index){
        const updatedIndex = taskList.findIndex(item=> item.index === index);
        const updatedTask = [...taskList];
        if (taskList.length <= updatedIndex + 1){
            setAlert("down"); 
            setTimeout(() => {
                setAlert("idle");
            }, 1500);
            
            return;
        }
        if (taskList.length >= updatedIndex){
            [updatedTask[updatedIndex+1], updatedTask[updatedIndex]] = [updatedTask[updatedIndex], updatedTask[updatedIndex+1]];
            setTaskList(updatedTask); 
            return;
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
