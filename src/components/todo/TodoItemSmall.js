// function TodoItemSmall(props) {
//   return <p onClick={props.onClick(props.item.id)} className="p-2 mb-2 bg-blue-500 rounded">
//     {props.item.title}
//   </p>
// }

function TodoItemSmall(props) {
  return <p onClick={() => props.onClick(props.item.id)} className="p-2 mb-2 bg-blue-500 rounded">
    {props.item.title}
  </p>
}

export default TodoItemSmall;