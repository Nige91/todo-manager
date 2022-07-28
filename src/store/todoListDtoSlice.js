import {createSlice} from "@reduxjs/toolkit";

export const todoListDtoSlice = createSlice({
  name: 'todoListDto',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { add } = todoListDtoSlice.actions
export default todoListDtoSlice.reducer
