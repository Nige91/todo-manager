import {createSlice} from "@reduxjs/toolkit";

export const todoDictDtoSlice = createSlice({
  name: 'todoDictDto',
  initialState: {},
  reducers: {
    addOrUpdate: (state, action) => {
      let todoItemDto = action.payload;
      state[todoItemDto.id] = todoItemDto;
    }
  }
});

export const { addOrUpdate } = todoDictDtoSlice.actions
export default todoDictDtoSlice.reducer
