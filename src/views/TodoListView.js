import TodoList from "../components/TodoList";
import { useDispatch } from 'react-redux';
import {add} from "../store/todoListSlice";

function TodoListView(){
  const dispatch = useDispatch();
  const clickHandler = ()=>{dispatch(add())};

  return <div>
    <h1>Todo List</h1>
    <TodoList />
    <button onClick={clickHandler}>Add</button>
  </div>
}

export default TodoListView;