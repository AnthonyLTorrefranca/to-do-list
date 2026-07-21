
export default function TaskBtn({handleDelete, index, moveUp}) {
  return (
    <section>
     <button className="m-1 p-2 bg-gray-50 cursor-pointer rounded-xl hover:bg-gray-300">☝️</button>
     <button className="m-1 p-2 bg-gray-50 cursor-pointer rounded-xl hover:bg-gray-300"
      onClick={()=> moveUp}>👇</button>
     <button className="m-1 p-2 bg-gray-50 cursor-pointer rounded-xl hover:bg-gray-300"
        onClick={()=> handleDelete(index)}>❌</button> 
    </section>
  )
}
