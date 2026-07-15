export default function TaskItem({handleDelete,}){
    return(
        <section className="">
            <button className="cursor-pointer mx-1 rounded p-2 bg-neutral-100 hover:bg-neutral-500">☝️</button>
            <button className="cursor-pointer mx-1 rounded p-2 bg-neutral-100 hover:bg-neutral-500">👇</button>
            <button className="cursor-pointer mx-1 rounded p-2 bg-neutral-100 hover:bg-neutral-500" type="button" onClick={handleDelete}>❌</button>
        </section>
    )}