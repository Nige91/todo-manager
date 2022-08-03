import { useDispatch } from 'react-redux';
import {addOrUpdate} from "../../store/todoDictDtoSlice";

function TodoItemDetail(props){
  let item = props.item;
  const dispatch = useDispatch();

  if(props.item === undefined){
    return;
  }

  const setItemDone = () => {
    item.done = true;
    dispatch(addOrUpdate(item.getDto()));
  }

  return <div className="flex flex-col rounded shadow m-2 bg-blue-400">
    <div className="flex flex-row">
      <div className="m-2 p-2 mr-0 mb-0 flex-grow rounded bg-blue-200">{item.title}</div>
      <div className="m-2 p-2 mb-0 rounded bg-blue-200">{item.responsible}</div>
    </div>
    <div className="m-2 p-2 rounded bg-blue-200">{item.description}</div>
    <div className="flex flex-row">
      <button className="m-2 p-2 rounded shadow bg-blue-200">Del</button>
      <button className="m-2 p-2 rounded shadow bg-blue-200" onClick={setItemDone}>Done</button>
    </div>
  </div>
}

export default TodoItemDetail;