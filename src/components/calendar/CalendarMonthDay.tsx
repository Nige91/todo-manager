

import React, {useState} from "react"

import TodoForm from "../todo/TodoForm"
import TodoItemDetail from "../todo/TodoItemDetail"
import TodoList from "../todo/TodoList"
import TodoItemObj from "../../model/TodoItemObj"
import {TodoMap} from "../../hooks/useTodoMap"
import Modal from "../ui/Modal"
import CalendarUtils from "../../utils/CalendarUtils"
import CollapsableTodoList from "../todo/CollapsableTodoList";

type Props = {
  date: Date,
  todoMap: TodoMap,
  isToday: boolean
}

const CalendarMonthDay: React.FC<Props> = (props) => {
  const dayArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const [formModalActive, setFormModalActive] = useState(false)
  const [detailModalActive, setDetailModalActive] = useState(false)
  const [id, setId] = useState("")
  const dateString = CalendarUtils.formatDate(props.date)
  const todoMap = props.todoMap
  let todoList: TodoItemObj[] = []
  if (todoMap[dateString] !== undefined) {
    todoList = Object.values(todoMap[dateString])
  }
  const todoItem = id !== "" ? todoMap[dateString][id] : null


  const formButtonCLickHandler = () => {
    setFormModalActive(true)
  }

  const formModalOutsideClickHandler = () => {
    setFormModalActive(false)
  }

  const todoClickHandler = (id: string) => {
    setDetailModalActive(true)
    setId(id)
  }

  const detailModalOutsideClickHandler = () => {
    setDetailModalActive(false)
    setId("")
  }

  const detailDateChangeHandler = () => {
    setDetailModalActive(false)
    setId("")
  }

  return <div className={`p-2 m-2 shadow rounded bg-blue-200 ${props.isToday ? 'border-2 border-black' : ''}`}>
    <p className="mb-2">{dayArr[(props.date.getDay() + 6) % 7]}</p>
    <p className="mb-2">{CalendarUtils.formatDate(props.date)}</p>
    <CollapsableTodoList
        todoList={todoList}
        onItemClick={todoClickHandler}
    />
    <button className="p-2 rounded bg-blue-500" onClick={formButtonCLickHandler}>+</button>
    <Modal onClickOutside={formModalOutsideClickHandler} active={formModalActive} modalDivId="formModal"
           backdropDivId="formBackdrop">
      <TodoForm date={props.date} afterSubmit={formModalOutsideClickHandler}/>
    </Modal>
    <Modal onClickOutside={detailModalOutsideClickHandler} active={detailModalActive} modalDivId="todoModal"
           backdropDivId="todoBackdrop">
      {todoItem !== null && <TodoItemDetail afterDelete={detailModalOutsideClickHandler}
                                            afterDateChange={detailDateChangeHandler}
                                            item={todoItem}/>}
    </Modal>
  </div>
}

export default CalendarMonthDay