import CalendarUtils from "../../utils/CalendarUtils";
import Modal from "../ui/Modal";
import React, {useState} from "react";

import TodoFormView from "../../views/TodoFormView";
import TodoForm from "../todo/TodoForm";
import {useSelector} from "react-redux";
import CalendarEntry from "./CalendarEntry";
import TodoItemObj from "../../model/TodoItemObj";

function CalendarMonthDay(props){
  let dayArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const [formModalActive, setFormModalActive] = useState(false)
  const [detailModalActive, setDetailModalActive] = useState(false)

  const todoItems = useSelector((state)=>{
    let todoList = state.todoListDto.map(dto => TodoItemObj.fromDto(dto));
    return todoList.filter(element => CalendarUtils.compareDate(element.date, props.date));
  })

  const formButtonCLickHandler = (evt) => {
    setFormModalActive(true);
  }

  const formModalOutsideClickHandler = () => {
    setFormModalActive(false);
  }

  return <div className="p-2 m-2 shadow rounded bg-blue-200">
    <p className="mb-2">{dayArr[(props.date.getDay() + 6)%7]}</p>
    <p className="mb-2">{CalendarUtils.formatDate(props.date)}</p>
    {todoItems.map((item)=>{
      return <React.Fragment>
        <CalendarEntry item={item}/>
      </React.Fragment>
    })}
    <button className="p-2 rounded bg-blue-500" onClick={formButtonCLickHandler}>+</button>
    <Modal onClickOutside={formModalOutsideClickHandler} active={formModalActive}>
      <TodoForm date={props.date} afterSubmit={formModalOutsideClickHandler} />
    </Modal>
  </div>
}

export default CalendarMonthDay;