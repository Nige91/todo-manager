import React from "react";
import TodoItemSmall from "./TodoItemSmall";
import TodoItemObj from "../../model/TodoItemObj";

type Props = {
  todoList: TodoItemObj[],
  onItemClick: (id: number) => void
}

const TodoList: React.FC<Props> = (props) => {
  return <div>
    {props.todoList.map((item)=><TodoItemSmall item={item} onClick={props.onItemClick}/>)}
  </div>
}

export default TodoList;