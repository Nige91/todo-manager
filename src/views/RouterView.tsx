
import {Route, Routes} from "react-router-dom"
import CalendarView from "./CalendarView"
import React from "react"
import TodoListView from "./TodoListView"


function RouterView(){
  return <div>
    <Routes>
      <Route path="/" element={<TodoListView/>}/>
      <Route path="/calendar" element={<CalendarView/>}/>
    </Routes>
  </div>
}

export default RouterView