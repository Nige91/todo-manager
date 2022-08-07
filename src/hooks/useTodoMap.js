import {useSelector} from "react-redux";
import TodoItemObj from "../model/TodoItemObj";
import CalendarUtils from "../utils/CalendarUtils";

function useTodoMap(){
  const todoList = useSelector(state => Object.keys(state.todoDictDto).map(
      (key)=>TodoItemObj.fromDto(state.todoDictDto[key])));
  let todoDateMap = {}
  todoList.forEach((item) => {
    let dateString;
    if(item.date === null){
      dateString = TodoItemObj.WITHOUT_DATE_IDENTIFIER;
    }
    else{
      dateString = CalendarUtils.formatDate(item.date);
    }
    if(todoDateMap[dateString] === undefined){
      todoDateMap[dateString] = {};
    }
    todoDateMap[dateString][item.id] = item;
  })
  return todoDateMap;
}

export default useTodoMap;