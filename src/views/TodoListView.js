import TodoList from "../components/TodoList";
import {useDispatch} from 'react-redux';
import {useState} from "react";
import Modal from "../components/ui/Modal";
import TodoForm from "../components/TodoForm";

function TodoListView(){
  const [modalActive, setModalActive] = useState(false)

  const onOutsideClickHandler = () => {
    setModalActive(false);
  }

  const dispatch = useDispatch();
  const clickHandler = ()=>{
    setModalActive(true);
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