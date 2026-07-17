import {useState, useEffect} from 'react'
import TaskLists from './components/TaskLists.jsx'
import TaskInput from './components/TaskInput.jsx'
import SetAlert from './components/SetAlert.jsx'

const App = () => {
  const [task, setTask] = useState("")
  const [alert, setAlert] = useState("idle")
  const [TaskList, setTaskList] = useState([])
  
  function handleChange(e){
    setTask(e.target.value)
    setAlert("idle")
    return
  }
  function HandleSubmit(e){
    e.preventDefault();
    const newTask = {id: crypto.randomUUID(), text: task}

    if(task.trim() === ""){
      setAlert("blank")
      return
    }

    if (TaskList.some((chicken)=> chicken.text.trim().toLowerCase() === newTask.text.trim().toLowerCase())){
      setAlert("duplicate");
      return
    }

    setAlert("idle")
    setTaskList(prev=> [...prev, newTask])
    setTask("")
  }
  useEffect(()=>{console.log(TaskList)},[TaskList])
  return (
    <section className="flex items-center justify-start flex-col flex-nowrap border-2 border-gray-500 rounded-xl h-300 w-150">
      <SetAlert alert={alert} />
      <form onSubmit={HandleSubmit}  className="flex items-center justify-center mt-20">
        <TaskInput task={task} setTask={setTask} handleChange={handleChange}/>
      </form>
      <section className="flex mt-10">
        <TaskLists TaskList={TaskList} setTaskList={setTaskList} />
      </section>
    </section>
  )
}

export default App