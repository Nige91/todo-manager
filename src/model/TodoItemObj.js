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
    return new TodoItemObj(dto.title, new Date(dto.dateAsTime), dto.responsible, dto.description)
  }

  getDto = () => {
    return {
      title: this.title,
      dateAsTime: this.date.getTime(),
      responsible: this.responsible,
      description: this.description
    }
  }
}

export default TodoItemObj;