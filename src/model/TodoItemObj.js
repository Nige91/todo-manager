class TodoItemObj {
  id;
  title;
  date;
  responsible;
  description;


  constructor(id, title, date, responsible, description) {
    this.id = id;
    this.title = title;
    this.date = date
    this.responsible = responsible;
    this.description = description;
  }

  static fromDto(dto){
    let date = dto.dateAsTime === null ? null : new Date(dto.dateAsTime)
    return new TodoItemObj(dto.id, dto.title, date, dto.responsible, dto.description)
  }

  getDto = () => {
    return {
      id: this.id,
      title: this.title,
      dateAsTime: this.date === null ? null : this.date.getTime(),
      responsible: this.responsible,
      description: this.description
    }
  }
}

export default TodoItemObj;