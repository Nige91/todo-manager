import {useSelector} from "react-redux"
import TodoItemObj from "../model/TodoItemObj"
import {RootState} from "../store/store"
import CalendarUtils from "../utils/CalendarUtils"

export type TodoMap = {
  [date: string]: {
    [id: string]: TodoItemObj
  }
}

function useTodoMap(){
  const todoList = useSelector<RootState, TodoItemObj[]>(state => Object.keys(state.todoDictDto).map(
      (key)=>TodoItemObj.fromDto(state.todoDictDto[key])))
  let todoMap: TodoMap = {}
  todoList.forEach((item) => {
    let dateString
    if(item.date === null){
      dateString = TodoItemObj.WITHOUT_DATE_IDENTIFIER
    }
    else{
      dateString = CalendarUtils.formatDate(item.date)
    }
    if(todoMap[dateString] === undefined){
      todoMap[dateString] = {}
    }
    todoMap[dateString][item.id] = item
  })
  return todoMap
}

export default useTodoMap