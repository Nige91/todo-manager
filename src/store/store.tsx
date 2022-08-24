import { configureStore } from '@reduxjs/toolkit'
import todoDictDtoReducer from './todoDictDtoSlice'

const store = configureStore({
  reducer: {
    todoDictDto: todoDictDtoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store




// import { createStore } from 'react-redux'
// import TodoItemObj from "../model/TodoItemObj"
//
// const todoListReducer = (state = { todoList: [] }, action) => {
//   if (action.type === 'add') {
//     let counter = state.todoList.length
//     return {
//       todoList: state.todoList.append(new TodoItemObj("title"+counter, "resp"+counter, "descr"+counter))
//     }
//   }
//
//   return state
// }
//
// const store = createStore(todoListReducer)
//
// export default store