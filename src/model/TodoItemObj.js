class TodoItemObj {
  id;
  title;
  date;
  responsible;
  description;
  done;


  constructor(id, title, date, responsible, description, done=false) {
    this.id = id;
    this.title = title;
    this.date = date
    this.responsible = responsible;
    this.description = description;
    this.done=done;
  }

  static fromDto(dto){
    let date = dto.dateAsTime === null ? null : new Date(dto.dateAsTime)
    return new TodoItemObj(dto.id, dto.title, date, dto.responsible, dto.description, dto.done)
  }

  getDto = () => {
    return {
      id: this.id,
      title: this.title,
      dateAsTime: this.date === null ? null : this.date.getTime(),
      responsible: this.responsible,
      description: this.description,
      done: this.done
    }
  }
}

export default TodoItemObj;