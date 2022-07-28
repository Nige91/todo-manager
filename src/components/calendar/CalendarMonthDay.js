import CalendarUtils from "../../utils/CalendarUtils";
import Modal from "../ui/Modal";
import {useState} from "react";
import TodoFormView from "../../views/TodoFormView";
import TodoForm from "../TodoForm";
import {useSelector} from "react-redux";
import CalendarEntry from "./CalendarEntry";
import TodoItemObj from "../../model/TodoItemObj";

function CalendarMonthDay(props){
  let dayArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const [modalActive, setModalActive] = useState(false)

  const todoItems = useSelector((state)=>{
    let todoList = state.todoListDto.map(dto => TodoItemObj.fromDto(dto));
    return todoList.filter(element => CalendarUtils.compareDate(element.date, props.date));
  })

  const buttonCLickHandler = (evt) => {
    setModalActive(true);
  }

  const modalOutsideClickHandler = () => {
    setModalActive(false);
  }

  return <div className="p-2 m-2 shadow rounded bg-blue-200">
    <p>{dayArr[(props.date.getDay() + 6)%7]}</p>
    <p>{CalendarUtils.formatDate(props.date)}</p>
    {todoItems.map((item)=>{
      return <CalendarEntry item={item}/>
    })}
    <button className="p-2 mt-2 rounded bg-blue-500" onClick={buttonCLickHandler}>+</button>
    <Modal onClickOutside={modalOutsideClickHandler} active={modalActive}>
      <TodoForm date={props.date} afterSubmit={modalOutsideClickHandler} />
    </Modal>
  </div>
}

export default CalendarMonthDay;