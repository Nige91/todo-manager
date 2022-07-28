class TodoItemObj {
  title;
  date;
  responsible;
  description;


  constructor(title, date, responsible, description) {
    this.title = title;
    this.date = date
    this.responsible = responsible;
    this.description = description;
  }

  static fromDto(dto){
    let date = dto.dateAsTime === null ? null : new Date(dto.dateAsTime)
    return new TodoItemObj(dto.title, date, dto.responsible, dto.description)
  }

  getDto = () => {
    return {
      title: this.title,
      dateAsTime: this.date === null ? null : this.date.getTime(),
      responsible: this.responsible,
      description: this.description
    }
  }
}

export default TodoItemObj;