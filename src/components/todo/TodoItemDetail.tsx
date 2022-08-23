import React, {useRef, useState} from "react";

import { useDispatch } from 'react-redux';
import TodoItemObj from "../../model/TodoItemObj";
import CalendarUtils from "../../utils/CalendarUtils";
import {addOrUpdate, requestRemove} from "../../store/todoDictDtoSlice";

type Props = {
  item: TodoItemObj
  afterDelete: () => void
  afterDateChange: () => void
}


const TodoItemDetail: React.FC<Props> = (props) => {
  let item = props.item;
  const titleInput = useRef<HTMLInputElement>(null);
  const descrInput = useRef<HTMLInputElement>(null);
  const dateInput = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false)
  const [titleInputValue, setTitleInputValue] = useState(item.title)
  const [descrInputValue, setDescrInputValue] = useState(item.description)
  const [dateInputValue, setDateInputValue] = useState(item.date !== null ? CalendarUtils.formatDateForDateInput(item.date) : null)

  const toggleItemDone = () => {
    item.done = !item.done;
    dispatch(addOrUpdate(item.getDto()));
  }

  const delItem = () => {
    dispatch(requestRemove(item.getDto()));
    props.afterDelete();
  }

  const toggleEdit = () => {
    //todo make sure editMode is the most recent value
    if(editMode === true){
      updateItem()
    }
    setEditMode(prevState => !prevState)
  }

  const updateItem = () => {
    let titleValue =  titleInput.current?.value
    if (typeof titleValue === "string") {
      item.title = titleValue;
    }
    let descrValue = descrInput.current?.value
    if (typeof descrValue === "string") {
      item.description = descrValue;
    }
    let dateValue = dateInput.current?.valueAsDate
    let dateChanged = item.date?.getTime() !== dateValue?.getTime();
    item.date = dateValue === undefined ? null : dateValue
    if(dateChanged){
      props.afterDateChange() //TODO rename fucntion
    }
    dispatch(addOrUpdate(item.getDto()));
  }

  const color200 = item.done ? "bg-green-200" : "bg-blue-200"
  const color400 = item.done ? "bg-green-400" : "bg-blue-400"


  const titleInputJSX = <input type="text" ref={titleInput} name="title" id="title" value={titleInputValue}
                               onChange={(evt) => setTitleInputValue(evt.target.value)}/>
  const descrInputJSX = <input type="text" ref={descrInput} name="descr" id="descr" value={descrInputValue}
                               onChange={(evt) => setDescrInputValue(evt.target.value)}/>
  const dateInputJSX = <input type="date" ref={dateInput} name="date" id="date" value={dateInputValue === null ? undefined : dateInputValue}
                              onChange={(evt) => setDateInputValue(evt.target.value)}/>

  return <div className={`flex flex-col rounded shadow m-2 ${color400}`}>
    {editMode && dateInputJSX}
    <div className="flex flex-row">
      <div className={`m-2 p-2 mr-0 mb-0 flex-grow rounded ${color200}`}>{editMode ? titleInputJSX : item.title}</div>
      <div className={`m-2 p-2 mr-0 mb-0 flex-grow rounded ${color200}`}>{item.syncStatus}</div>
      <button className={`m-2 p-2 mb-0 rounded shadow ${color200}`} onClick={toggleEdit}>
        {editMode ? 'Save' : 'Edit'}
      </button>
    </div>
    <div className={`m-2 p-2 rounded ${color200}`}>{editMode ? descrInputJSX : item.description}</div>
    <div className="flex flex-row">
      <button className={`m-2 p-2 rounded shadow ${color200}`} onClick={delItem}>Del</button>
      <button className={`m-2 p-2 rounded shadow ${color200}`} onClick={toggleItemDone}>{item.done ? "Unset Done" : "Set Done"}</button>
    </div>
  </div>
}

export default TodoItemDetail;