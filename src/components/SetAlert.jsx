export default function SetAlert({alert}) {
  return (
    <section className="p-10">
      {alert === "idle" && <h1>Welcome back! Add your new task below.</h1>}
      {alert === "blank" && <h1 className="text-red-500">You cannot add a task that is blank.</h1>}
      {alert === "duplicate" && <h1 className="text-red-500">Bad news! This task exists!</h1>}
    </section>
  )
}
