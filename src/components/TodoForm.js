function TodoForm(){
  const onClickHandler = ()=>{

  }



  return <div className="flex-col">
    <form>
      <div>
        <label for="title">title</label>
        <input type="text" name="title" id="title"/>
      </div>
      <div>
        <label htmlFor="responsible">responsible</label>
        <input type="text" name="responsible" id="responsible"/>
      </div>
      <div>
        <label htmlFor="description">description</label>
        <input type="text" name="description" id="description"/>
      </div>
    </form>
    <button onCLick={}>Submit</button>
  </div>
}