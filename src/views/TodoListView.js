import TodoList from "../components/todo/TodoList";
import React, {useState} from "react";
import Modal from "../components/ui/Modal";
import TodoForm from "../components/todo/TodoForm";
import TodoItemObj from "../model/TodoItemObj";
import useTodoMap from "../hooks/useTodoMap";
import TodoItemDetail from "../components/todo/TodoItemDetail";

function TodoListView(){
  const [formModalActive, setFormModalActive] = useState(false)
  const [detailModalActive, setDetailModalActive] = useState(false)
  const [id, setId] = useState(-1)

  const todoMap = useTodoMap();
  let todoList = []
  if (todoMap[TodoItemObj.WITHOUT_DATE_IDENTIFIER] !== undefined) {
    todoList = Object.values(todoMap[TodoItemObj.WITHOUT_DATE_IDENTIFIER])
  }

  const formOutsideClickHandler = () => {
    setFormModalActive(false);
  }

  const formClickHandler = ()=>{
    setFormModalActive(true);
  };

  const detailModalOutsideClickHandler = () => {
    setDetailModalActive(false);
  }

  const detailModalClickHandler = (id)=>{
    setDetailModalActive(true);
    setId(id);
  };

  const detailDateChangeHandler = () => {
    setDetailModalActive(false);
    setId(-1);
  }

  return <div>
    <h1>Todo List</h1>
    <TodoList
        onItemClick={detailModalClickHandler}
        todoList={todoList}/>
    <button onClick={formClickHandler}>Add</button>
    <Modal active={formModalActive} onClickOutside={formOutsideClickHandler} modalDivId="formModal"
           backdropDivId="formBackdrop">
      <TodoForm afterSubmit={formOutsideClickHandler}/>
    </Modal>
    <Modal onClickOutside={detailModalOutsideClickHandler} active={detailModalActive} modalDivId="todoModal"
           backdropDivId="todoBackdrop">
      <TodoItemDetail afterDelete={detailModalOutsideClickHandler}
                      afterDateChange={detailDateChangeHandler}
                      item={id !== -1 ? todoMap[TodoItemObj.WITHOUT_DATE_IDENTIFIER][id] : null}/>
    </Modal>
  </div>
}

export default TodoListView;