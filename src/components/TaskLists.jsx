import TaskBtn from './TaskBtn.jsx'

export default function TaskLists({index, taskList, handleDelete, handleMoveUp, handleMoveDown}) {
  return ( <ul className="px-4">
            {taskList.map((item)=> { 
              return <li key={item.id} 
                className="flex items-center justify-between border rounded-2xl m-5 p-3 pl-15 w-80"> 
                {item.text} 
                <TaskBtn index={item.id} handleDelete={handleDelete} handleMoveUp={handleMoveUp} handleMoveDown={handleMoveDown}/>
            </li>})}
          </ul>
  )
}
