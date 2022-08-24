import {AnyAction, createSlice, PayloadAction, ThunkAction} from "@reduxjs/toolkit"
import {collection, doc, getDocs, query, setDoc, deleteDoc} from "firebase/firestore"


import {SyncAction, SyncStatus, TodoItemDTO} from "../model/TodoItemObj"
import {RootState} from "./store"
import {firebaseDb} from "../index"
import {FirebaseUtils} from "../utils/FirebaseUtils"

export type TodoSliceState = {[key: string]: TodoItemDTO}
const todoItemsCollectionName = "todoItems"

export const todoDictDtoSlice = createSlice({
  name: 'todoDictDto',
  initialState: {} as TodoSliceState,
  reducers: {
    addOrUpdate: (state, action: PayloadAction<TodoItemDTO>) => {
      let todoItemDto = action.payload
      todoItemDto.syncStatus = SyncStatus.PENDING
      state[todoItemDto.id] = todoItemDto
    },
    addList: (state, action: PayloadAction<TodoItemDTO[]>) => {
      action.payload.forEach(item => state[item.id] = item)
    },
    setSyncStatus: (state, action: PayloadAction<{id: string, newStatus: SyncStatus}>) => {
      let todoItemDto = state[action.payload.id]
      todoItemDto.syncStatus = action.payload.newStatus
      state[action.payload.id] = todoItemDto
    },
    remove: (state, action: PayloadAction<TodoItemDTO>) => {
      let todoItemDto = action.payload
      delete state[todoItemDto.id]
    },
    requestRemove: (state, action: PayloadAction<TodoItemDTO>) => {
      let todoItemDto = action.payload
      todoItemDto.syncStatus = SyncStatus.PENDING
      todoItemDto.syncAction = SyncAction.DELETE
      state[todoItemDto.id] = todoItemDto
    }
  }
})

export const fetchTodo = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const q = query(collection(firebaseDb, todoItemsCollectionName))

    const querySnapshot = await getDocs(q)
    // @ts-ignore
    const todoDTOList = querySnapshot.docs.map(doc => FirebaseUtils.convertFirebaseToTodoItemDTO(doc.data()))
    dispatch(todoDictDtoSlice.actions.addList(todoDTOList))
    console.log("successfully fetched todoList: "+todoDTOList)
  }
}

export const syncTodo = (item: TodoItemDTO): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(todoDictDtoSlice.actions.setSyncStatus({id: item.id, newStatus: SyncStatus.SYNCING}))
    if (item.syncAction === SyncAction.ADD_OR_UPDATE) {
      let itemFirebaseDTO = FirebaseUtils.convertTodoItemDTOForFirebase(item)
      console.log("start sync for item " + item.id)
      setDoc(doc(firebaseDb, todoItemsCollectionName, item.id), itemFirebaseDTO)
          .then(() => {
            dispatch(todoDictDtoSlice.actions.setSyncStatus({id: item.id, newStatus: SyncStatus.COMPLETE}))
            console.log("sync success for item " + item.id)
          })
          .catch(reason => {
            //TODO proper error handling
            dispatch(todoDictDtoSlice.actions.setSyncStatus({id: item.id, newStatus: SyncStatus.FAILED}))
            console.log("sync failed for item " + item.id)
          })
    }
    else if(item.syncAction === SyncAction.DELETE){
      console.log("start delete for item " + item.id)
      deleteDoc(doc(firebaseDb, todoItemsCollectionName, item.id))
          .then(() => {
            dispatch(todoDictDtoSlice.actions.remove(item))
            console.log("sync delete success for item " + item.id)
          })
          .catch(reason => {
            //TODO proper error handling
            dispatch(todoDictDtoSlice.actions.setSyncStatus({id: item.id, newStatus: SyncStatus.FAILED}))
            console.log("sync delete failed for item " + item.id)
          })
    }
  }
}

export const { addOrUpdate, addList, setSyncStatus, remove, requestRemove } = todoDictDtoSlice.actions
export default todoDictDtoSlice.reducer
