import {createSlice} from "@reduxjs/toolkit";
import TodoItemObj from "../model/TodoItemObj";

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    add: (state) => {
      const count = state.length;
      state.push(new TodoItemObj("title"+count, "resp"+count, "descr"+count))
    }
  }
});

export const { add } = todoListSlice.actions
export default todoListSlice.reducer
