export default function TaskInput({task, handleChange}) {
  return (
    <>
      <input placeholder='Enter here' name="task" value={task} onChange={handleChange} className="border p-4 rounded-tl-full rounded-bl-full" />
      <button className="cursor-pointer bg-red-100 border p-4 rounded-tr-full rounded-br-full">ADD</button>
    </>
  )
}
