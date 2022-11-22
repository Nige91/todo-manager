import {useEffect, useRef, useState} from "react"
import { useDispatch } from 'react-redux'
import {addOrUpdate} from "../../store/todoDictDtoSlice"
import TodoItemObj from "../../model/TodoItemObj"
import React from "react"

type Props = {
  date?: Date,
  active: boolean,
  afterSubmit: () => void
}

const TodoForm: React.FC<Props> = (props) => {
  const dispatch = useDispatch()

  const titleInput = useRef<HTMLInputElement>(null)
  const descrInput = useRef<HTMLInputElement>(null)

  const [activeAlreadyChanged, setActiveAlreadyChanged] = useState(false)

  useEffect(()=>{
    if(props.active && !activeAlreadyChanged){
      setActiveAlreadyChanged(true);
      titleInput.current!.focus()
    }
    else if(!props.active && activeAlreadyChanged){
      setActiveAlreadyChanged(false);
    }
  }, [props.active, activeAlreadyChanged])

  const onClickHandler = () => {
    const id = Math.floor(Math.random()*100000000).toString() //TODO implement correct id

    //when creating todoitem from listview, it intentionally doesn't have a date so the item will be instantiated with date null.
    let date = null
    if(props.date !== undefined){
      date = props.date
    }
    let todoItem = new TodoItemObj(id, titleInput.current!.value, date, descrInput.current!.value)
    dispatch(addOrUpdate(todoItem.getDto()))
    titleInput.current!.value = ""
    descrInput.current!.value = ""
    props.afterSubmit()
  }

  const enterKeyHandler: React.KeyboardEventHandler = (evt) => {
    if(evt.key === 'Enter'){
      onClickHandler();
    }
  }

  return <div className="flex-col pt-1  rounded bg-white">
    <form>
      <div className="m-2 p-2  rounded">
        <label htmlFor="title">title:</label>
        <input className="ml-2 border-black border-2 rounded-md" onKeyUp={enterKeyHandler} tabIndex={0} type="text" ref={titleInput} name="title" id="title"/>
      </div>
      <div className="m-2 p-2 rounded">
        <label htmlFor="description">description: </label>
        <input className="ml-2 border-black border-2 rounded-md" onKeyUp={enterKeyHandler} type="text" ref={descrInput} name="description" id="description"/>
      </div>
    </form>
    <button className="p-2 ml-4 mb-4 rounded shadow bg-clr-base" onClick={onClickHandler}>Submit</button>
  </div>
}

export default TodoForm