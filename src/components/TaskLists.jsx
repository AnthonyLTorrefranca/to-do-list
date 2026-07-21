import TaskBtn from './TaskBtn.jsx'

export default function TaskLists({taskList, handleDelete, moveUp, }) {
  return (
    <ul className="flex flex-col pt-10">
      {taskList.map(task=> 
        <li key={task.id} className="flex flex-row justify-between items-center mb-2 p-5 border rounded-2xl w-80 overflow-hidden">
            {task.text}
            <TaskBtn handleDelete={handleDelete} index={task.id} moveup={moveUp} />
        </li>)}
    </ul>
  )
}
