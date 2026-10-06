export default function TaskInput({task, handleChange, handleSubmit, alert, handleCancel}) {
  return (
    <form onSubmit={handleSubmit}>
      <input className="w-150 text-white border rounded-l-xl p-5" placeholder="Add your task here..." 
        name="task" value={task} onChange={handleChange} />
      <button className="bg-yellow-400 cursor-pointer text-black border border-yellow-500 py-5 w-20 rounded-r-xl">ADD</button>
      {alert === "edit" && <button className="cursor-pointer border py-5" onClick={()=> handleCancel()}>❌</button>}
    </form>
  )
}
 