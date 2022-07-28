import {useRef} from "react";
import { useDispatch } from 'react-redux';
import {add} from "../store/todoListDtoSlice";
import TodoItemObj from "../model/TodoItemObj";
import CalendarUtils from "../utils/CalendarUtils";

function TodoForm(props){
  const dispatch = useDispatch();

  const dateInput = useRef();
  const titleInput = useRef();
  const respInput = useRef();
  const descrInput = useRef();

  const lockDateInput = props.date != null
  let lockedDateInputProps = {}
  if(lockDateInput){
    lockedDateInputProps = {
      value: CalendarUtils.formatDateForInput(props.date),
      readOnly: "readOnly"
    }
  }

  const onClickHandler = () => {
    let todoItem = new TodoItemObj(titleInput.current.value, dateInput.current.valueAsDate,
        respInput.current.value, descrInput.current.value);
    dispatch(add(todoItem.getDto()))
    props.afterSubmit();
  }

  return <div className="flex-col p-2">
    <form>
      <div className="m-2 p-2 rounded ">
        <label htmlFor="date">date: </label>
        <input type="date" {...lockedDateInputProps} ref={dateInput} name="date" id="date"/>
      </div>
      <div className="m-2 p-2  rounded">
        <label htmlFor="title">title: </label>
        <input type="text" ref={titleInput} name="title" id="title"/>
      </div>
      <div className="m-2 p-2 rounded">
        <label htmlFor="responsible">responsible: </label>
        <input type="text" ref={respInput} name="responsible" id="responsible"/>
      </div>
      <div className="m-2 p-2 rounded">
        <label htmlFor="description">description: </label>
        <input type="text" ref={descrInput} name="description" id="description"/>
      </div>
    </form>
    <button className="p-2 rounded shadow bg-blue-200" onClick={onClickHandler}>Submit</button>
  </div>
}

export default TodoForm;