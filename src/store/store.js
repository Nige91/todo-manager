import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from './todoListSlice'

export default configureStore({
  reducer: {
    todoList: todoListReducer,
  },
})




// import { createStore } from 'react-redux';
// import TodoItemObj from "../model/TodoItemObj";
//
// const todoListReducer = (state = { todoList: [] }, action) => {
//   if (action.type === 'add') {
//     let counter = state.todoList.length;
//     return {
//       todoList: state.todoList.append(new TodoItemObj("title"+counter, "resp"+counter, "descr"+counter))
//     };
//   }
//
//   return state;
// };
//
// const store = createStore(todoListReducer);
//
// export default store;