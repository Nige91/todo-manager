import CalendarUtils from "../../utils/CalendarUtils";
import Modal from "../ui/Modal";
import React, {useState} from "react";

import TodoForm from "../todo/TodoForm";
import TodoItemDetail from "../todo/TodoItemDetail";
import TodoList from "../todo/TodoList";
import useTodoMap from "../../hooks/useTodoMap";
import TodoItemObj from "../../model/TodoItemObj";

function CalendarMonthDay(props){
  let dayArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const [formModalActive, setFormModalActive] = useState(false)
  const [detailModalActive, setDetailModalActive] = useState(false)
  const [id, setId] = useState(-1)
  const dateString = CalendarUtils.formatDate(props.date);
  const todoMap = useTodoMap();
  let todoList = []
  if (todoMap[dateString] !== undefined) {
    todoList = Object.values(todoMap[dateString])
  }


  const formButtonCLickHandler = (evt) => {
    setFormModalActive(true);
  }

  const formModalOutsideClickHandler = () => {
    setFormModalActive(false);
  }

  const todoClickHandler = (id) => {
    setDetailModalActive(true);
    setId(id);
  }

  const detailModalOutsideClickHandler = () => {
    setDetailModalActive(false)
  }

  return <div className="p-2 m-2 shadow rounded bg-blue-200">
    <p className="mb-2">{dayArr[(props.date.getDay() + 6)%7]}</p>
    <p className="mb-2">{CalendarUtils.formatDate(props.date)}</p>
    <TodoList
        todoList={todoList}
        onItemClick={todoClickHandler}
    />
    <button className="p-2 rounded bg-blue-500" onClick={formButtonCLickHandler}>+</button>
    <Modal onClickOutside={formModalOutsideClickHandler} active={formModalActive} modalDivId="formModal" backdropDivId="formBackdrop" >
      <TodoForm date={props.date} afterSubmit={formModalOutsideClickHandler} />
    </Modal>
    <Modal onClickOutside={detailModalOutsideClickHandler} active={detailModalActive} modalDivId="todoModal" backdropDivId="todoBackdrop" >
      <TodoItemDetail afterDelete={detailModalOutsideClickHandler} item={id !== -1 ? todoMap[dateString][id] : null} />
    </Modal>
  </div>
}

export default CalendarMonthDay;