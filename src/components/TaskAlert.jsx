export default function TaskAlert({alert}) {
  return (
    <section>
      {alert === "idle" && <h1 className="p-10">Welcome back to your tasks!</h1>}
      {alert === "blank" && <h1 className="p-10 text-red-500">Task cannot be blank!</h1>}
      {alert === "duplicate" && <h1 className="p-10 text-red-500">Task exists! Complete it first.</h1>}
      {alert === "full" && <h1 className="p-10 text-red-500">Task full complete sum!</h1>}
      {alert === "top" && <h1 className="p-10 text-red-500">That's all the way up!</h1>}
      {alert === "down" && <h1 className="p-10 text-red-500">That's all the way down!</h1>}
      {alert === "cancelled" && <h1 className="p-10 text-red-500">Edit cancelled!</h1>}
      {alert === "edit" && <h1 className="p-10 text-red-500">EDIT MODE</h1>}
      {alert === "delete" && <h1 className="p-10 text-red-500">Task deleted!</h1>}
    </section>
  )
}
