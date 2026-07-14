export default function Alert({alert}) {
  return (
    <div className="flex items-center justify-center">
        {alert === "idle" && <h1>Input your task here!</h1>}
        {alert === "blank" && <h1>Task cannot be blank!</h1>}
        {alert === "duplicate" && <h1>This task exists!</h1>}
    </div>
  )
}
