export type TodoItemDTO = {
  id: number
  title: string
  dateAsTime: number | null;
  description: string;
  done: boolean;
}

class TodoItemObj {
  id: number
  title: string
  date: Date | null;
  description: string;
  done: boolean;

  static get WITHOUT_DATE_IDENTIFIER() {
    return "no-date"
  }


  constructor(id: number, title: string, date: Date | null, description: string, done=false) {
    this.id = id;
    this.title = title;
    this.date = date
    this.description = description;
    this.done=done;
  }

  static fromDto(dto: TodoItemDTO){
    let date = dto.dateAsTime === null ? null : new Date(dto.dateAsTime)
    return new TodoItemObj(dto.id, dto.title, date, dto.description, dto.done)
  }

  getDto = () => {
    return {
      id: this.id,
      title: this.title,
      dateAsTime: this.date === null ? null : this.date.getTime(),
      description: this.description,
      done: this.done
    }
  }
}

export default TodoItemObj;