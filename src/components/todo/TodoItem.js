function TodoItem(props){
  let item = props.item

  return <div className="flex flex-col rounded shadow m-2 bg-blue-400">
    <div className="flex flex-row">
      <div className="m-2 p-2 mr-0 mb-0 flex-grow rounded bg-blue-200">{item.title}</div>
      <div className="m-2 p-2 mb-0 rounded bg-blue-200">{item.responsible}</div>
    </div>
    <div className="m-2 p-2 rounded bg-blue-200">{item.description}</div>
  </div>
}

export default TodoItem;