import TaskBtn from './TaskBtn.jsx'

export default function TaskList({setTaskList, TaskList, }) {

  return (
    <>
      <ul>
        {TaskList.map((item,id)=>{
          return <li key={id} className="flex justify-between p-5 m-5 border rounded-full w-50">
            {item.text}
            <TaskBtn setTaskList={setTaskList} />
          </li>
        })}
      </ul>
    </>
  )
}
