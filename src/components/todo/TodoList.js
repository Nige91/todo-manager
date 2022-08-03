import { useSelector } from 'react-redux';

import TodoItemObj from "../../model/TodoItemObj";
import TodoItem from "./TodoItem";

function TodoList() {
  const todoList = useSelector(state=>Object.keys(state.todoDictDto).map((key)=>TodoItemObj.fromDto(state.todoDictDto[key])));

  return <div className="w-3/4">
    { todoList.map((item) => {
        return <TodoItem item={item}/>;
  })}</div>
}

export default TodoList;