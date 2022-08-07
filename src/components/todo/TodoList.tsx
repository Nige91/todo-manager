import React from "react";
// @ts-ignore
import TodoItemSmall from "./TodoItemSmall";

type Props = {
  todoList: [],
  onItemClick: any
}

const TodoList: React.FC<Props> = (props) => {
  return <div>
    {props.todoList.map((item)=><TodoItemSmall item={item} onClick={props.onItemClick}/>)}
  </div>
}

export default TodoList;