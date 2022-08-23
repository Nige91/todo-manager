import TodoItemObj, {SyncStatus, TodoItemDTO} from "../model/TodoItemObj";

export class FirebaseUtils{
  static convertTodoItemDTOForFirebase(item: TodoItemDTO):Omit<TodoItemDTO, 'syncStatus'>{
    let result = {}
    Object.keys(item).forEach(key=>{
      if(key !== 'syncStatus'){
        // @ts-ignore
        result[key] = item[key];
      }
    })
    // @ts-ignore
    return result;
  }
  static convertFirebaseToTodoItemDTO(item: Omit<TodoItemDTO, 'syncStatus'>):TodoItemDTO{
    // @ts-ignore
    item.syncStatus = SyncStatus.COMPLETE;
    // @ts-ignore
    return item;
  }
}