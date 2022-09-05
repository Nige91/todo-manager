import TodoList from "../components/todo/TodoList"
import React, {useState} from "react"
import Modal from "../components/ui/Modal"
import TodoForm from "../components/todo/TodoForm"
import TodoItemObj from "../model/TodoItemObj"
import useTodoMap from "../hooks/useTodoMap"
import TodoItemDetail from "../components/todo/TodoItemDetail"
import CollapsableTodoList from "../components/todo/CollapsableTodoList";

function TodoListView(){
  const [formModalActive, setFormModalActive] = useState(false)
  const [detailModalActive, setDetailModalActive] = useState(false)
  const [id, setId] = useState("")

  const todoMap = useTodoMap()
  let todoList: TodoItemObj[] = []
  if (todoMap[TodoItemObj.WITHOUT_DATE_IDENTIFIER] !== undefined) {
    todoList = Object.values(todoMap[TodoItemObj.WITHOUT_DATE_IDENTIFIER])
  }
  const todoItem = id !== "" ? todoMap[TodoItemObj.WITHOUT_DATE_IDENTIFIER][id] : null

  const formOutsideClickHandler = () => {
    setFormModalActive(false)
  }

  const formClickHandler = ()=>{
    setFormModalActive(true)
  }

  const detailModalOutsideClickHandler = () => {
    setDetailModalActive(false)
  }

  const detailModalClickHandler = (id: string)=>{
    setDetailModalActive(true)
    setId(id)
  }

  const detailDateChangeHandler = () => {
    setDetailModalActive(false)
    setId("")
  }

  return <div className="m-2 p-2 max-w-md">
    <h1>Todo List</h1>
    <CollapsableTodoList
        onItemClick={detailModalClickHandler}
        todoList={todoList}/>
    <button onClick={formClickHandler}>Add</button>
    <Modal active={formModalActive} onClickOutside={formOutsideClickHandler} modalDivId="formModal"
           backdropDivId="formBackdrop">
      <TodoForm afterSubmit={formOutsideClickHandler}/>
    </Modal>
    <Modal onClickOutside={detailModalOutsideClickHandler} active={detailModalActive} modalDivId="todoModal"
           backdropDivId="todoBackdrop">
      {todoItem !== null && <TodoItemDetail afterDelete={detailModalOutsideClickHandler}
                                            afterDateChange={detailDateChangeHandler}
                                            item={todoItem!}/>}
    </Modal>
  </div>
}

export default TodoListView