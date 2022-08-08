import React from "react";

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
  const dispatch = useDispatch();

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

  return <div className="flex flex-col rounded shadow m-2 bg-blue-400">
    <div className="flex flex-row">
      <div className="m-2 p-2 mr-0 mb-0 flex-grow rounded bg-blue-200">{item.title}</div>
    </div>
    <div className="m-2 p-2 rounded bg-blue-200">{item.description}</div>
    <div className="flex flex-row">
      <button className="m-2 p-2 rounded shadow bg-blue-200" onClick={delItem}>Del</button>
      <button className="m-2 p-2 rounded shadow bg-blue-200" onClick={setItemDone}>Done</button>
    </div>
  </div>
}

export default TodoItemDetail;