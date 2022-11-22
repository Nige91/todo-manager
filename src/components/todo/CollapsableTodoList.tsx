import React, {useState} from "react"
import TodoItemObj from "../../model/TodoItemObj"
import TodoList from "./TodoList";

type Props = {
  todoList: TodoItemObj[],
  onItemClick: (id: string) => void
}

const CollapsableTodoList: React.FC<Props> = (props) => {
  const [showList, setShowList] = useState(false);

  const nItems = props.todoList.length
  const nItemsDone = props.todoList.filter(item=>item.done).length

  return <React.Fragment>
    <div className="p-2 mb-2 bg-clr-base rounded flex items-center cursor-pointer" onClick={()=>setShowList(prev=>!prev)}>
      <span className="material-symbols-outlined size-20 text-clr-accent">
        {showList ? "expand_more" : "chevron_right"}
      </span>
      <span className="ml-1 text-neutral-dark">Items {"(" + nItemsDone + "/" + nItems + " done)"}</span>
    </div>
    <div className="ml-4">{showList && <TodoList todoList={props.todoList} onItemClick={props.onItemClick}/>}</div>
  </React.Fragment>
}

export default CollapsableTodoList