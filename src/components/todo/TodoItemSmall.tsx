import React from "react";
import TodoItemObj from "../../model/TodoItemObj";

type Props = {
  onClick: (id: number) => void
  item: TodoItemObj
}

const TodoItemSmall: React.FC<Props> = (props) => {
  return <p onClick={() => props.onClick(props.item.id)} className="p-2 mb-2 bg-blue-500 rounded">
    {props.item.title}
  </p>
}

export default TodoItemSmall;