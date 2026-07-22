
export default function TaskBtn({index, handleDelete, handleMoveUp, handleMoveDown,}) {
  return (
    <section>
     <button className="m-1 p-2 bg-gray-50 cursor-pointer rounded-xl hover:bg-gray-300" 
        onClick={()=>handleMoveUp(index)}>☝️</button>
     <button className="m-1 p-2 bg-gray-50 cursor-pointer rounded-xl hover:bg-gray-300"
        onClick={()=>handleMoveDown(index)}>👇</button>
     <button className="m-1 p-2 bg-gray-50 cursor-pointer rounded-xl hover:bg-gray-300" 
        onClick={()=>handleDelete(index)}>❌</button> 
    </section>
  )
}
