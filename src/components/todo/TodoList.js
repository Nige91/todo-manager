import { useSelector } from 'react-redux';

import TodoItemObj from "../../model/TodoItemObj";
import TodoItem from "./TodoItem";

function TodoList() {
  const todoList = useSelector(state=>state.todoListDto.map((dto)=>TodoItemObj.fromDto(dto)));

  return <div className="w-3/4">
    { todoList.map((item) => {
        return <TodoItem item={item}/>;
  })}</div>
}

export default TodoList;