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
        const selectedTask = taskList.findIndex(item=> item.id === index);
        const selTaskText = taskList[selectedTask].text;
        setTask(selTaskText);
        setEditTask(selTaskText)
        setEditTask(index)
    }
    // handles the submit
    function handleSubmit(e){
        e.preventDefault()
        if (editTask !== null){
            setTaskList(prevTask =>
                prevTask.map(item=> item.id === editTask ? 
                    {...item, text: task} : item)
                )
        console.log("check")
        }
        // gives new task unique id
        const newTask = {
            id: crypto.randomUUID(), text: task, 
            isCompleted: false, editTask: null,
        }
        // prevents blank task to be added
        if(task.trim() === ""){
            setAlert("blank")
            return
        }
        // checks if the new task exists
        if(taskList.some(item=> item.text.trim().toLowerCase() === task.trim().toLowerCase())){
            setAlert("duplicate")
            return
        }
        
        // appends task to the list
        setTaskList(prev=>[...prev, newTask])

        // clears the input box
        setTask("")
    }
    // input change
    function handleChange(e){
        setTask(e.target.value)
        setAlert("idle")
        return
    }
    function handleDelete(index){
        const updatedTask = taskList.filter(item=> item.id !== index);
        setTaskList(updatedTask)
    }

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
    }

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
        // console.log(updatedIndex + 1, updatedTask.length)
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
        <TaskLists taskList={taskList} handleDelete={handleDelete} handleMoveUp={handleMoveUp} handleMoveDown={handleMoveDown} handleEdit={handleEdit} />
    </section>
    </>
  )
}
