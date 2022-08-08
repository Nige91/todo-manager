import React from "react";
import TodoItemObj from "../../model/TodoItemObj";

type Props = {
  onClick: (id: number) => void
  item: TodoItemObj
}

const TodoItemSmall: React.FC<Props> = (props) => {
  const color = props.item.done ? "bg-green-400" : "bg-blue-400"

  return <p onClick={() => props.onClick(props.item.id)} className={`p-2 mb-2 ${color} rounded`} >
    {props.item.title}
  </p>
}

export default TodoItemSmall;