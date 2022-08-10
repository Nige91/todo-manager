import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {TodoItemDTO} from "../model/TodoItemObj";

type todoSliceState = {[key: number]: TodoItemDTO}

export const todoDictDtoSlice = createSlice({
  name: 'todoDictDto',
  initialState: {} as todoSliceState,
  reducers: {
    addOrUpdate: (state, action: PayloadAction<TodoItemDTO>) => {
      let todoItemDto = action.payload;
      state[todoItemDto.id] = todoItemDto;
    },
    remove: (state, action) => {
      let todoItemDto = action.payload;
      delete state[todoItemDto.id];
    }
  }
});

export const { addOrUpdate, remove } = todoDictDtoSlice.actions
export default todoDictDtoSlice.reducer
