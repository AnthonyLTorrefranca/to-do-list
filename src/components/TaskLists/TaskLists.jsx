import TaskItem from './TaskItem.jsx'

export default function TaskLists({taskList, handleDelete}){
return (
    <ul>
        {taskList.map(item=>
            <li key={item.id} className="flex justify-around items-center border border-solid p-3 m-5 w-80 rounded-full">
                {item.text}
                <section className="taskListBtn flex flex-row">
                    <TaskItem handleDelete={handleDelete}/>
                </section>
            </li>
        )
        }
    </ul>
)}