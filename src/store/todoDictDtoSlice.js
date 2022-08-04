import {createSlice} from "@reduxjs/toolkit";

export const todoDictDtoSlice = createSlice({
  name: 'todoDictDto',
  initialState: {},
  reducers: {
    addOrUpdate: (state, action) => {
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
