import React from "react"
import TodoItemObj, {SyncAction, SyncStatus} from "../../model/TodoItemObj"
import Spinner from "../ui/Spinner";

type Props = {
  onClick: (id: string) => void
  item: TodoItemObj
}

const TodoItemSmall: React.FC<Props> = (props) => {
  const color = props.item.done ? "bg-clr-done" : "bg-clr-ndone"
  const opacity = props.item.syncAction === SyncAction.DELETE  ? "opacity-40" : ""

  return <p onClick={() => props.onClick(props.item.id)} className={`p-2 mb-2 ${color} ${opacity} rounded flex`} >
    {props.item.title}
    <Spinner visible={props.item.syncStatus===SyncStatus.SYNCING} size={2} styles="relative ml-auto mr-1"/>
  </p>
}

export default TodoItemSmall