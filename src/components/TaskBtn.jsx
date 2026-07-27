
export default function TaskBtn({index, handleDelete, handleMoveUp, handleMoveDown, handleEdit}) {
  return (
    <section className="grid grid-cols-2 w-20">
      <button type="button" className="m-1 p-2 bg-gray-50 cursor-pointer rounded-xl hover:bg-gray-300"
         onClick={()=>handleEdit(index)}>✏️</button>
      <button type="button" className="m-1 p-2 bg-gray-50 cursor-pointer rounded-xl hover:bg-gray-300" 
         onClick={()=>handleDelete(index)}>❌</button> 
      <button type="button" className="m-1 p-2 bg-gray-50 cursor-pointer rounded-xl hover:bg-gray-300" 
         onClick={()=>handleMoveUp(index)}>☝️</button>
      <button type="button" className="m-1 p-2 bg-gray-50 cursor-pointer rounded-xl hover:bg-gray-300"
         onClick={()=>handleMoveDown(index)}>👇</button>
    </section>
  )
}
