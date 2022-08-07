import React from "react";

type Props = {
  onClick: (id: number) => void
  item: any
}

const TodoItemSmall: React.FC<Props> = (props) => {
  return <p onClick={() => props.onClick(props.item.id)} className="p-2 mb-2 bg-blue-500 rounded">
    {props.item.title}
  </p>
}

export default TodoItemSmall;