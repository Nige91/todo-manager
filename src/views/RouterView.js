import TodoListView from "./TodoListView";
import TodoFormView from "./TodoFormView";
import {Route, Routes} from "react-router-dom";

function RouterView(){
  return <div>
    <Routes>
      <Route path="/" element={<TodoListView/>}/>
      <Route path="/route1" element={<TodoListView/>}/>
      <Route path="/route2" element={<TodoFormView/>}/>
    </Routes>
  </div>
}

export default RouterView;