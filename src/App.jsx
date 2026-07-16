import {useState, useEffect} from 'react'
import TaskLists from './components/TaskLists.jsx'
import TaskInput from './components/TaskInput.jsx'

const App = () => {
  const [task, setTask] = useState("")
  const [TaskList, setTaskList] = useState([])
  function handleChange(e){
    setTask(e.target.value)
  }
  function HandleSubmit(e){
    e.preventDefault();
    const newTask = {id: crypto.randomUUID(), text: task}
    setTaskList(prev=> [...prev, newTask])
    setTask("")
  }
  useEffect(()=>{console.log(task, TaskList)},[task, TaskList])
  return (
    <section className="flex items-center justify-center mt-20">
      <form onSubmit={HandleSubmit}>
        <TaskInput task={task} setTask={setTask} handleChange={handleChange}/>
        <TaskLists task={task.id} TaskList={TaskList} />
      </form>
    </section>
  )
}

export default App