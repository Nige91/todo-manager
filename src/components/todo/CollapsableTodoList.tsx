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
    <div className="p-2 mb-2 bg-clr-light rounded" onClick={()=>setShowList(prev=>!prev)}>
      Items {"("+nItemsDone+"/"+nItems+")"}
    </div>
    {showList && <TodoList todoList={props.todoList} onItemClick={props.onItemClick}/>}
  </React.Fragment>
}

export default CollapsableTodoList