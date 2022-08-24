import {SyncAction, SyncStatus, TodoItemDTO} from "../model/TodoItemObj";

export class FirebaseUtils{
  static convertTodoItemDTOForFirebase(item: TodoItemDTO):Omit<TodoItemDTO, 'syncStatus' | 'syncAction'>{
    let result = {}
    Object.keys(item).forEach(key=>{
      if(key !== 'syncStatus' && key !== 'syncAction'){
        // @ts-ignore
        result[key] = item[key];
      }
    })
    // @ts-ignore
    return result;
  }
  static convertFirebaseToTodoItemDTO(item: Omit<TodoItemDTO, 'syncStatus' | 'syncAction'>):TodoItemDTO{
    // @ts-ignore
    item.syncStatus = SyncStatus.COMPLETE;
    // @ts-ignore
    item.syncAction = SyncAction.ADD_OR_UPDATE;
    // @ts-ignore
    return item;
  }
}