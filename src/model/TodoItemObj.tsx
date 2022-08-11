export enum SyncStatus{
  Pending,
  Syncing,
  Complete,
  Failed
}

export type TodoItemDTO = {
  id: string
  title: string
  dateAsTime: number | null;
  description: string;
  done: boolean;
  syncStatus: SyncStatus
}

class TodoItemObj {
  id: string
  title: string
  date: Date | null;
  description: string;
  done: boolean;
  syncStatus: SyncStatus

  static get WITHOUT_DATE_IDENTIFIER() {
    return "no-date"
  }


  constructor(id: string, title: string, date: Date | null, description: string,
              syncStatus: SyncStatus = SyncStatus.Pending, done=false) {
    this.id = id;
    this.title = title;
    this.date = date
    this.description = description;
    this.syncStatus = syncStatus;
    this.done=done;
  }

  static fromDto(dto: TodoItemDTO){
    let date = dto.dateAsTime === null ? null : new Date(dto.dateAsTime)
    return new TodoItemObj(dto.id, dto.title, date, dto.description, dto.syncStatus, dto.done)
  }

  getDto = () => {
    return {
      id: this.id,
      title: this.title,
      dateAsTime: this.date === null ? null : this.date.getTime(),
      description: this.description,
      syncStatus: this.syncStatus,
      done: this.done
    }
  }
}

export default TodoItemObj;