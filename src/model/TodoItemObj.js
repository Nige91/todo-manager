class TodoItemObj {
  id;
  title;
  date;
  description;
  done;

  static get WITHOUT_DATE_IDENTIFIER() {
    return "no-date"
  }


  constructor(id, title, date, description, done=false) {
    this.id = id;
    this.title = title;
    this.date = date
    this.description = description;
    this.done=done;
  }

  static fromDto(dto){
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