import React from "react";
import TodoItemObj, {SyncStatus} from "../../model/TodoItemObj";

type Props = {
  onClick: (id: string) => void
  item: TodoItemObj
}

const TodoItemSmall: React.FC<Props> = (props) => {
  const color = props.item.done ? "bg-green-400" : "bg-blue-400"

  return <p onClick={() => props.onClick(props.item.id)} className={`p-2 mb-2 ${color} rounded`} >
    {props.item.title} {props.item.syncStatus===SyncStatus.SYNCING &&
      <img src={process.env.PUBLIC_URL + '/loading.gif'} className="w-2 h-2"/>}
  </p>
}

export default TodoItemSmall;