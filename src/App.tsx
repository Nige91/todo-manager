import React, {useEffect} from 'react';
import './App.css';
// @ts-ignore
import Sidebar from "./components/sidebar/Sidebar";
import RouterView from "./views/RouterView";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/store";
import {SyncStatus, TodoItemDTO} from "./model/TodoItemObj";
import {fetchTodo, syncTodo} from "./store/todoDictDtoSlice";
import {ThunkDispatch} from "@reduxjs/toolkit";

function App() {
  const todoItemDTOList = useSelector<RootState, TodoItemDTO[]>(state => Object.values(state.todoDictDto));
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(()=>{
    dispatch(fetchTodo())
  }, [dispatch])

  useEffect(()=> {
    todoItemDTOList.filter(item=>item.syncStatus === SyncStatus.Pending).forEach(item=>{
      dispatch(syncTodo(item));
    })
  }, [todoItemDTOList, dispatch])

  return (
      <div className="flex flex-row">
        <Sidebar />
        <RouterView/>
      </div>
  );
}

export default App;
