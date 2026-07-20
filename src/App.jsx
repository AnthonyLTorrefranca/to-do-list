import { useState,} from 'react'
import TaskInput from './components/TaskInput.jsx'
import TaskLists from './components/TaskLists.jsx'

const App = () => {
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([])

  function handleSubmit(e){
    e.preventDefault()
    const newTask = {index: crypto.randomUUID(), text: task}
    setTaskList((prev)=>[...prev, newTask])
    setTask("")
  }
  function handleDelete(id){
    const updatedTask = taskList.filter((_,i) => { return i !== id})
    setTaskList(updatedTask)
  }
  // useEffect(()=>{console.log(taskList)},[taskList])
  return (
    <section className="border-2 rounded-xl h-300 w-150 overflow-hidden p-10">
      <TaskInput handleSubmit={handleSubmit} task={task} setTask={setTask} />
      <TaskLists task={task} taskList={taskList} handleDelete={handleDelete} />
    </section>
  )
}

export default App
