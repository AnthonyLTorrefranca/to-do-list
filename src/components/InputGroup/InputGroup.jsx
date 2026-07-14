export default function InputGroup ({handleChange, task}) {
  return (
    <section className="flex items-center flex-col">
      <section className="flex items-center">
        <input className="h-10 w-50 py-3 px-3 rounded-l-2xl" type="text" value={task} placeholder="Enter your task here..." onChange={handleChange} />
            <button className="bg-green-200 rounded-r-2xl h-10 w-10 cursor-pointer">ADD</button>
      </section>
    </section>
  )
}