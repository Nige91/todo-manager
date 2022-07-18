import {useState} from "react";

import TodoItemObj from "../model/TodoItemObj";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todoItems, setTodoItems] = useState([
      new TodoItemObj("title1", "resp1", "descr1"),
      new TodoItemObj("title2", "resp2", "descr2"),
      new TodoItemObj("title3", "resp3", "descr3"),
  ]);

  return <div>{ todoItems.map((item) => {
        return <TodoItem item={item}/>;
  })}</div>
}

export default TodoList;