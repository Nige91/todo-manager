import TodoItemSmall from "./TodoItemSmall";

function TodoList(props) {
  return <div>
    {props.todoList.map((item)=><TodoItemSmall item={item} onClick={props.onItemClick}/>)}
  </div>
}

export default TodoList;