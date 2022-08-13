import {AnyAction, createSlice, PayloadAction, ThunkAction} from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore";


import {SyncStatus, TodoItemDTO} from "../model/TodoItemObj";
import {RootState} from "./store";
import {firebaseDb} from "../index";
import {FirebaseUtils} from "../utils/FirebaseUtils";

export type TodoSliceState = {[key: string]: TodoItemDTO}
const todoItemsCollectionName = "todoItems"

export const todoDictDtoSlice = createSlice({
  name: 'todoDictDto',
  initialState: {} as TodoSliceState,
  reducers: {
    addOrUpdate: (state, action: PayloadAction<TodoItemDTO>) => {
      let todoItemDto = action.payload;
      todoItemDto.syncStatus = SyncStatus.Pending;
      state[todoItemDto.id] = todoItemDto;
    },
    setSyncStatus: (state, action: PayloadAction<{id: string, newStatus: SyncStatus}>) => {
      let todoItemDto = state[action.payload.id];
      todoItemDto.syncStatus = action.payload.newStatus;
      state[action.payload.id] = todoItemDto;
    },
    remove: (state, action) => {
      let todoItemDto = action.payload;
      delete state[todoItemDto.id];
    }
  }
});

export const syncTodo = (item: TodoItemDTO): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(todoDictDtoSlice.actions.setSyncStatus({id: item.id, newStatus: SyncStatus.Syncing}))
    let itemFirebaseDTO = FirebaseUtils.convertTodoItemDTOForFirebase(item);
    console.log("start sync")
    setDoc(doc(firebaseDb, todoItemsCollectionName, item.id), itemFirebaseDTO)
        .then(()=>{
          console.log("start sync")
          dispatch(todoDictDtoSlice.actions.setSyncStatus({id: item.id, newStatus: SyncStatus.Complete}))
        })
        .catch(reason => {
          //TODO proper error handling
          dispatch(todoDictDtoSlice.actions.setSyncStatus({id: item.id, newStatus: SyncStatus.Failed}))
        })
    }
}

export const { addOrUpdate, setSyncStatus, remove } = todoDictDtoSlice.actions
export default todoDictDtoSlice.reducer
