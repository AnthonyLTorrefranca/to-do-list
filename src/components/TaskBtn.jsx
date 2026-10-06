
export default function TaskBtn({index, handleDelete, handleMoveUp, handleMoveDown, handleEdit}) {
  return (
    <section className="flex flex-row w-50">
      <button type="button" className="w-150 m-1 p-2 cursor-pointer rounded-xl hover:bg-gray-300"
         onClick={()=>handleEdit(index)}><span className="invert">✎</span></button>
      <button type="button" className="w-150 m-1 p-2 cursor-pointer rounded-xl hover:bg-gray-300" 
         onClick={()=>handleDelete(index)}><span className="invert">🗑️</span></button> 
      <button type="button" className="w-150 m-1 p-2 cursor-pointer rounded-xl hover:bg-gray-300" 
         onClick={()=>handleMoveUp(index)}><span className="invert">⇡</span></button>
      <button type="button" className="w-150 m-1 p-2 cursor-pointer rounded-xl hover:bg-gray-300"
         onClick={()=>handleMoveDown(index)}><span className="invert">⇓</span></button>
    </section>
  )
}
