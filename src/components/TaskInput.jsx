export default function TaskInput({task, handleChange, handleSubmit, alert, handleCancel}) {
  return (
    <form onSubmit={handleSubmit}>
      <input className=" border rounded-l-xl p-5" placeholder="Add your task here..." 
        name="task" value={task} onChange={handleChange} />
      <button className=" cursor-pointer border py-5">ADD</button>
      {alert === "edit" && <button className=" cursor-pointer border py-5" onClick={()=> handleCancel()}>❌</button>}
    </form>
  )
}
