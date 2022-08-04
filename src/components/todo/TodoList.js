import { useSelector } from 'react-redux';

import TodoItemObj from "../../model/TodoItemObj";
import TodoItem from "./TodoItem";
import CalendarUtils from "../../utils/CalendarUtils";

function TodoList() {
  const todoList = useSelector(state=>Object.keys(state.todoDictDto).map((key)=>TodoItemObj.fromDto(state.todoDictDto[key])));

  const todoDateMap = {}
  todoList.forEach((item) => {
    let dateString = CalendarUtils.formatDate(item.date);
    if(todoDateMap[dateString] === undefined){
      todoDateMap[dateString] = [];
    }
    todoDateMap[dateString].push(item)
  })

  const jsxContent = [];
  Object.keys(todoDateMap).forEach((dateKey)=>{
    jsxContent.push(<p className="">{dateKey}</p>)
    todoDateMap[dateKey].forEach((item) => {
      jsxContent.push(<TodoItem item={item}/>)
    })
  });

  return <div className="w-3/4">
    {jsxContent}
  </div>
}

export default TodoList;