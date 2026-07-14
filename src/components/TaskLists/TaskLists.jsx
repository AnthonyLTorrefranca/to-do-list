import taskItem from './TaskItem.jsx'

export default function TaskLists({taskList}) {
  return (
    <ul className="py-20">
      {taskList.map(item=>
        <taskItem item={item}/>
      )}
    </ul>
  )
}
