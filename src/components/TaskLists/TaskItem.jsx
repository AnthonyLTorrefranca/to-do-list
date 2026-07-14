export default function TaskItem({item}) {
  return (
    <li key={item.id} className="flex justify-start p-5 w-100 m-5 border-black border-2">
            {item.text}
        </li>
    )
}
