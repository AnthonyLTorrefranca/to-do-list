export default function TaskInput({task, handleChange}) {
  return (
    <>
    <input placeholder='Enter here' name="task" value={task} onChange={handleChange} />
    <button>ADD</button>
    </>
  )
}
