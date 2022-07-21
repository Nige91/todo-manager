import TodoListView from "./TodoListView";
import TodoFormView from "./TodoFormView";
import {Route, Routes} from "react-router-dom";
import CalendarView from "./CalendarView";


function RouterView(){
  return <div>
    <Routes>
      <Route path="/" element={<TodoListView/>}/>
      <Route path="/route1" element={<TodoListView/>}/>
      <Route path="/route2" element={<TodoFormView/>}/>
      <Route path="/route3" element={<CalendarView/>}/>
    </Routes>
  </div>
}

export default RouterView;