import CalendarUtils from "../../utils/CalendarUtils";
import Modal from "../ui/Modal";
import React, {useState} from "react";

import TodoFormView from "../../views/TodoFormView";
import TodoForm from "../todo/TodoForm";
import {useSelector} from "react-redux";
import TodoItemSmall from "../todo/TodoItemSmall";
import TodoItemObj from "../../model/TodoItemObj";
import TodoItemDetail from "../todo/TodoItemDetail";

function CalendarMonthDay(props){
  let dayArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const [formModalActive, setFormModalActive] = useState(false)
  const [detailModalActive, setDetailModalActive] = useState(false)
  const [id, setId] = useState(-1)

  const todoItemsMap = useSelector((state)=>{
    let todoDictDto = state.todoDictDto;
    let result = {};
    Object.keys(todoDictDto).map((key) => {
      let todoItem = TodoItemObj.fromDto(todoDictDto[key]);
      if(CalendarUtils.compareDate(todoItem.date, props.date)){
        result[todoItem.id] = todoItem;
      }
    })
    return result;
  })

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
    { Object.keys(todoItemsMap).map((key)=>{
      return <React.Fragment>
        <TodoItemSmall item={todoItemsMap[key]} onClick={todoClickHandler}/>
      </React.Fragment>
    })}
    <button className="p-2 rounded bg-blue-500" onClick={formButtonCLickHandler}>+</button>
    <Modal onClickOutside={formModalOutsideClickHandler} active={formModalActive} modalDivId="formModal" backdropDivId="formBackdrop" >
      <TodoForm date={props.date} afterSubmit={formModalOutsideClickHandler} />
    </Modal>
    <Modal onClickOutside={detailModalOutsideClickHandler} active={detailModalActive} modalDivId="todoModal" backdropDivId="todoBackdrop" >
      <TodoItemDetail item={todoItemsMap[id]} />
    </Modal>
  </div>
}

export default CalendarMonthDay;