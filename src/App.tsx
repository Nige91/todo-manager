import React from 'react';
import './App.css';
// @ts-ignore
import Sidebar from "./components/sidebar/Sidebar";
import RouterView from "./views/RouterView";

function App() {
  return (
      <div className="flex flex-row">
        <Sidebar />
        <RouterView/>
      </div>
  );
}

export default App;
