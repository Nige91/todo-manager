import {useRef} from "react";
import { useDispatch } from 'react-redux';
import {addOrUpdate} from "../../store/todoDictDtoSlice";
import TodoItemObj from "../../model/TodoItemObj";
import CalendarUtils from "../../utils/CalendarUtils";

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
    const id = Math.floor(Math.random()*100000000) //TODO implement correct id
    let todoItem = new TodoItemObj(id, titleInput.current.value, dateInput.current.valueAsDate,
        respInput.current.value, descrInput.current.value);
    dispatch(addOrUpdate(todoItem.getDto()))
    dateInput.current.value = null
    titleInput.current.value = ""
    respInput.current.value = ""
    descrInput.current.value = ""
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