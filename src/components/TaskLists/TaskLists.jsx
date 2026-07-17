import TaskItem from './TaskItem.jsx'

export default function TaskLists({ taskList, handleDelete, index}){
return (
    <ul>
        {taskList.map((item, index)=>
            <li key={item.index} className="flex justify-around items-center border border-solid p-3 m-5 w-80 rounded-full">
                {item.text}
                <section className="taskListBtn flex flex-row">
                    <TaskItem index={index} handleDelete={handleDelete}/>
                </section>
            </li>
        )
        }
    </ul>
)}