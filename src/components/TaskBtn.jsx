
export default function TaskBtn({index, handleDelete, handleMoveUp, handleMoveDown,}) {
  return (
    <section className="grid grid-cols-2">
      <button className="m-1 p-2 bg-gray-50 cursor-pointer rounded-xl hover:bg-gray-300">✏️</button>
      <button className="m-1 p-2 bg-gray-50 cursor-pointer rounded-xl hover:bg-gray-300" 
         onClick={()=>handleDelete(index)}>❌</button> 
      <button className="m-1 p-2 bg-gray-50 cursor-pointer rounded-xl hover:bg-gray-300" 
         onClick={()=>handleMoveUp(index)}>☝️</button>
      <button className="m-1 p-2 bg-gray-50 cursor-pointer rounded-xl hover:bg-gray-300"
         onClick={()=>handleMoveDown(index)}>👇</button>
    </section>
  )
}
