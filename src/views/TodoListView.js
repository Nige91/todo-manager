import TodoList from "../components/TodoList";
import { useDispatch } from 'react-redux';
import {add} from "../store/todoListSlice";
import {useState} from "react";
import Modal from "../components/ui/Modal";
import TodoItemObj from "../model/TodoItemObj";
import TodoForm from "../components/TodoForm";

function TodoListView(){
  const [modalActive, setModalActive] = useState(false)

  const onOutsideClickHandler = () => {
    setModalActive(false);
  }

  const dispatch = useDispatch();
  const clickHandler = ()=>{
    setModalActive(true);
    // let item = new TodoItemObj("ajadrgnköa", "kjadnf", "jagrn", "kjrangk")
    // dispatch(add(item))
  };

  return <div>
    <h1>Todo List</h1>
    <TodoList />
    <button onClick={clickHandler}>Add</button>
    <Modal active={modalActive} onClickOutside={onOutsideClickHandler}>
      <TodoForm afterSubmit={onOutsideClickHandler} />
    </Modal>
  </div>
}

export default TodoListView;