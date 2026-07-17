export default function TaskBtn({setTaskList, TaskList, index}) {
  function handleDelete(targetIndex){
    const updatedTask = TaskList.filter((_,i)=> i!== targetIndex)
    setTaskList(updatedTask)
  }
  return (
    <section>
        <button className="cursor-pointer rounded-full hover:bg-gray-500 p-1 " type="button">☝️</button>
        <button className="cursor-pointer rounded-full hover:bg-gray-500 p-1 " type="button">👇</button>
        <button className="cursor-pointer rounded-full hover:bg-gray-500 p-1 " type="button" onClick={()=>handleDelete(index)}>❌</button>
    </section>
  )
}
