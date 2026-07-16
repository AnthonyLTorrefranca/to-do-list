export default function TaskItem({handleDelete, index}){
    return(
        <section className="">

            <button className="cursor-pointer mx-1 
                rounded p-2 bg-neutral-100 
                hover:bg-neutral-500">☝️</button>

            <button className="cursor-pointer mx-1 
                rounded p-2 bg-neutral-100 
                hover:bg-neutral-500">👇</button>

            <button className="cursor-pointer mx-1 
                rounded p-2 bg-neutral-100 
                hover:bg-neutral-500" type="button" onClick={()=>handleDelete(index)}>❌</button>
        </section>
    )}