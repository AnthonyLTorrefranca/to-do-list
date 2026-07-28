import TaskBtn from './TaskBtn.jsx'

export default function TaskLists({index, taskList, handleDelete, handleMoveUp, handleMoveDown, handleEdit}) {
  return ( 
    <ul className="px-4">
      {taskList.map((item)=> {
        return <li key={item.id} className="flex items-center justify-between border rounded-2xl m-5 overflow-hidden py-2 pl-3 pr-2 w-70">
          <input type="checkbox" className="" />
          <span className="">{item.text}</span> 
          <TaskBtn index={item.id} handleDelete={handleDelete} handleMoveUp={handleMoveUp}
            handleMoveDown={handleMoveDown} handleEdit={handleEdit} />
      </li>})}
    </ul>
  )
}
