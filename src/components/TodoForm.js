import {useRef} from "react";
import { useDispatch } from 'react-redux';
import {add} from "../store/todoListSlice";
import TodoItemObj from "../model/TodoItemObj";
import CalendarUtils from "../utils/CalendarUtils";

function TodoForm(props){
  const dispatch = useDispatch();

  const dateInput = useRef();
  const titleInput = useRef();
  const respInput = useRef();
  const descrInput = useRef();

  const lockDateInput = props.date != null
  let dateStringForInput = ""
  if(lockDateInput){
    dateStringForInput = CalendarUtils.formatDateForInput(props.date)
  }

  const onClickHandler = () => {
    let item = new TodoItemObj(titleInput.current.value, dateInput.current.value,
        respInput.current.value, descrInput.current.value);
    dispatch(add(item))
    props.afterSubmit();
  }

  return <div className="flex-col">
    <form>
      <div>
        <label htmlFor="date">date</label>
        <input type="date" readOnly={lockDateInput} value={dateStringForInput} ref={dateInput} name="date" id="date"/>
      </div>
      <div>
        <label htmlFor="title">title</label>
        <input type="text" ref={titleInput} name="title" id="title"/>
      </div>
      <div>
        <label htmlFor="responsible">responsible</label>
        <input type="text" ref={respInput} name="responsible" id="responsible"/>
      </div>
      <div>
        <label htmlFor="description">description</label>
        <input type="text" ref={descrInput} name="description" id="description"/>
      </div>
    </form>
    <button onClick={onClickHandler}>Submit</button>
  </div>
}

export default TodoForm;