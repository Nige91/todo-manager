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
    <div className="p-2 mb-2 bg-clr-light rounded flex items-center" onClick={()=>setShowList(prev=>!prev)}>
      <span className="material-symbols-outlined size-20">
        {showList ? "expand_more" : "chevron_right"}
      </span>
      <span className="ml-1">Items {"(" + nItemsDone + "/" + nItems + ")"}</span>
    </div>
    {showList && <TodoList todoList={props.todoList} onItemClick={props.onItemClick}/>}
  </React.Fragment>
}

export default CollapsableTodoList