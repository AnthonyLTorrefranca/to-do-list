export default function TaskInput({task, handleChange, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
      <input className=" border rounded-l-xl p-5" placeholder="Add your task here" name="task" value={task} onChange={handleChange} />
      <button className=" cursor-pointer border rounded-r-xl p-5">ADD</button>
    </form>
  )
}
