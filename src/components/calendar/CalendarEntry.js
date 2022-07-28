function CalendarEntry(props) {
  return <p className="p-2 mb-2 bg-blue-500 rounded">
    {props.item.title}
  </p>
}

export default CalendarEntry;