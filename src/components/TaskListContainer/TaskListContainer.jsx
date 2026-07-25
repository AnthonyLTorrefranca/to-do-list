import { useState } from 'react'
import TaskAlert from '../TaskAlert.jsx'
import TaskInput from '../TaskInput.jsx'
import TaskLists from '../TaskLists.jsx'

export default function TaskListContainer() {
    const [alert, setAlert] = useState("idle");
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [editTask, setEditTask] = useState(null);

    function handleEdit(index){
        setEditTask(index)
        const selTaskInd = taskList.findIndex(item=> item.id === index);
        const selTask = taskList[selTaskInd].text
        setTask(selTask)
        setEditTask(null)
    }
    // handles the submit
    function handleSubmit(e){
        e.preventDefault()
        // gives new task unique id
        const newTask = { id: crypto.randomUUID(), text: task}

        // checks the task if it's blank
        if (task.trim() === ""){
            setAlert("blank");
            return
        }
        if (editTask !== null){
            setEditTask("edit")
            setTaskList(prevTask=> 
                prevTask.map(item=> item.id === editTask ?
                    {...item, text: task} : item ))
            return
        }

        // checks duplicate for both old and new task
        if (taskList.some(item=> item.text === newTask.text)){
            console.log("dup check")
            setAlert("duplicate");
            return
        }
        // appends task to the list
        setTaskList(prev=> [...prev, newTask])
        console.log(taskList)
        setTask("")
    } 
    // handles the changes on input 
    function handleChange(e){
        setTask(e.target.value)
        setAlert("idle")
        return
    } // handles the deletion
    function handleDelete(index){
        const updatedTask = taskList.filter(item=> item.id !== index);
        setTaskList(updatedTask)
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
        const updatedIndex = taskList.findIndex(item=> item.id === index);
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
        <TaskInput task={task} handleChange={handleChange} handleSubmit={handleSubmit} editTask={editTask} />
        <TaskLists taskList={taskList} handleDelete={handleDelete} handleMoveUp={handleMoveUp} 
            handleMoveDown={handleMoveDown} handleEdit={handleEdit} />
    </section>
    </>
  )
}