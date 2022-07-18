function TodoItem(props){
  let item = props.item

  return <div className="flex-row rounded shadow margin">
    <div className="m-2 rounded">{item.title}</div>
    <div className="m-2 rounded">{item.responsible}</div>
    <div className="m-2 rounded">{item.description}</div>
  </div>
}

export default TodoItem;