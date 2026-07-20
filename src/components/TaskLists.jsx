import TaskBtn from "./TaskBtn"

export default function TaskLists({taskList, handleDelete, index}) {
  return (
    <section className=" pt-10">
      <ul className="flex flex-col items-center justify-center">
        {taskList.map((task, index) =>{
          return <li key={index} className="flex py-2 px-5 m-2 w-80 justify-around items-center border rounded-2xl"> {task.text}
          <TaskBtn handleDelete={handleDelete} index={index} />
        </li>
        })}
      </ul>
    </section>
  )
}
