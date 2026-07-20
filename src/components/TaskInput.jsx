export default function TaskInput({task, setTask, handleSubmit,}) {

  return (
    <form onSubmit={handleSubmit}  className="flex justify-center items-center flex-col">
      <h1 className="p-5">Welcome back! Add your task below!</h1>
    <section>
        <input type="text" placeholder="Enter your task here" 
          className="border-2 p-3 rounded-l-xl" name="task"value={task}
          onChange={(e)=>setTask(e.target.value)} />
        <button type="submit" className="p-3 border-2 rounded-r-2xl cursor-pointer">ADD</button>
      </section>
    </form>
  )
}
