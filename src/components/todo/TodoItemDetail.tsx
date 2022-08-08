import React, {useRef, useState} from "react";

import { useDispatch } from 'react-redux';
// @ts-ignore
import {addOrUpdate, remove} from "../../store/todoDictDtoSlice";
import TodoItemObj from "../../model/TodoItemObj";

type Props = {
  item: TodoItemObj
  afterDelete: () => void
}


// @ts-ignore
const TodoItemDetail: React.FC<Props> = (props) => {
  let item = props.item;
  const titleInput: React.MutableRefObject<HTMLInputElement | undefined> = useRef();
  const descrInput: React.MutableRefObject<HTMLInputElement | undefined>  = useRef();

  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false)
  const [titleInputValue, setTitleInputValue] = useState(item.title)
  const [descrInputValue, setDescrInputValue] = useState(item.description)

  if(props.item === undefined){
    return;
  }

  const setItemDone = () => {
    item.done = true;
    dispatch(addOrUpdate(item.getDto()));
  }

  const delItem = () => {
    dispatch(remove(item.getDto()));
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
    dispatch(addOrUpdate(item.getDto()));
  }


  // @ts-ignore
  const titleInputJSX = <input type="text" ref={titleInput} name="title" id="title" value={titleInputValue}
                               onChange={(evt) => setTitleInputValue(evt.target.value)}/>
  // @ts-ignore
  const descrInputJSX = <input type="text" ref={descrInput} name="descr" id="descr" value={descrInputValue}
                               onChange={(evt) => setDescrInputValue(evt.target.value)}/>

  return <div className="flex flex-col rounded shadow m-2 bg-blue-400">
    <div className="flex flex-row">
      <div className="m-2 p-2 mr-0 mb-0 flex-grow rounded bg-blue-200">{editMode ? titleInputJSX : item.title}</div>
      <button className="m-2 p-2 mb-0 rounded shadow bg-blue-200" onClick={toggleEdit}>
        {editMode ? 'Save' : 'Edit'}
      </button>
    </div>
    <div className="m-2 p-2 rounded bg-blue-200">{editMode ? descrInputJSX : item.description}</div>
    <div className="flex flex-row">
      <button className="m-2 p-2 rounded shadow bg-blue-200" onClick={delItem}>Del</button>
      <button className="m-2 p-2 rounded shadow bg-blue-200" onClick={setItemDone}>Done</button>
    </div>
  </div>
}

export default TodoItemDetail;