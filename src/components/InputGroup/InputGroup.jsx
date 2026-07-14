import '../../index.css'

const InputGroup = ({handleSubmit, handleAddTask, task, alert}) => {
  return (
    <section className="flex items-center flex-col">
        {alert === "idle" && <h1>Input your task here!</h1>}
        {alert === "blank" && <h1>Input your task here!</h1>}
        {alert === "duplicate" && <h1>Input your task here!</h1>}
        <section>
            <input type="text" placeholder='Enter your dedicated task here'
                name='task' value={task} onChange={handleAddTask} className="cursor-pointer border-solid border-black rounded-[25px]"/>
            <button onClick={handleSubmit} className="cursor-pointer bg-green-300 border
                border-solid border-black rounded-[25px]">ADD</button>
        </section>
    </section>
  )
}
export default InputGroup