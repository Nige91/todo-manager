import React, {useState} from "react"
import TodoItemObj from "../../model/TodoItemObj"
import TodoList from "./TodoList";

type Props = {
  todoList: TodoItemObj[],
  onItemClick: (id: string) => void
}

const CollapsableTodoList: React.FC<Props> = (props) => {
  const [showList, setShowList] = useState(false);

  return <React.Fragment>
    <div className="p-2 mb-2 bg-blue-200 rounded" onClick={()=>setShowList(prev=>!prev)}>Items</div>
    {showList && <TodoList todoList={props.todoList} onItemClick={props.onItemClick}/>}
  </React.Fragment>
}

export default CollapsableTodoList