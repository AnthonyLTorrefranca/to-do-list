const InputGroup = ({handleChange, task}) => {
  return (
    <section className="flex items-center flex-col">
      <section className="flex items-center">
        <input className="bg-green-200 h-10 w-50" type="text" value={task} placeholder="Enter your task here..." onChange={handleChange} />
            <button className="bg-green-200 h-10 w-10 cursor-pointer">ADD</button>
      </section>
    </section>
  )
}
export default InputGroup