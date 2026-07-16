import TaskItem from './TaskItem.jsx'

export default function TaskList({TaskList}) {
  return (
    <div>
      <ul>
        {TaskList.map((item,id)=>{
          return <li key={id}>
            {item.text}
            <TaskItem />
          </li>
        })}
      </ul>
    </div>
  )
}
