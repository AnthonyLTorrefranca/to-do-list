export default function TaskBtn({handleDelete, index}) {
  return (
    <section className="flex items-center justify-around">
      <button className="p-1 rounded cursor-pointer bg-gray-100 m-2 hover:bg-gray-200 ">☝️</button>
      <button className="p-1 rounded cursor-pointer bg-gray-100 m-2 hover:bg-gray-200 ">👇</button>
      <button className="p-1 rounded cursor-pointer bg-gray-100 m-2 hover:bg-gray-200 " onClick={()=> handleDelete(index)}>❌</button>
    </section>
  )
}
