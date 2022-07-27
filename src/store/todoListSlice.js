import {createSlice} from "@reduxjs/toolkit";
import TodoItemObj from "../model/TodoItemObj";

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { add } = todoListSlice.actions
export default todoListSlice.reducer
