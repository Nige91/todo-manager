import './App.css';
import Sidebar from "./components/Sidebar";
import RouterView from "./views/RouterView";
import TodoListView from "./views/TodoListView";

function App() {
  return (
      <div className="flex flex-row">
        <Sidebar />
        <RouterView/>
      </div>
  );
}

export default App;
