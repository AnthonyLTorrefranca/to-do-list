export default function TaskAlert({alert}) {
  return (
    <section>
      {alert === "idle" && <h1 className="p-10">Welcome back to your tasks!</h1>}
      {alert === "blank" && <h1 className="p-10 text-red-500">Task cannot be blank!</h1>}
      {alert === "duplicate" && <h1 className="p-10 text-red-500">Task existed!</h1>}
      {alert === "full" && <h1 className="p-10 text-red-500">Task full complete sum!</h1>}
    </section>
  )
}
