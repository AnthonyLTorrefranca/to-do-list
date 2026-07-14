import TaskItem from './TaskItem.jsx'

export default function TaskLists({taskList, handleDelete}){
return (
    <ul>
        {taskList.map(item=>
            <li key={item.id} className="flex justify-around border-2 border-solid p-6 m-5 w-100 rounded-full">
                {item.text}
                <TaskItem handleDelete={handleDelete}/>
            </li>
        )
        }
    </ul>
)}