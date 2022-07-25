import CalendarUtils from "../../utils/CalendarUtils";

function CalendarMonthDay(props){
  let dayArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return <div className="p-2 m-2 shadow rounded bg-blue-200">
    <p>{dayArr[(props.date.getDay() + 6)%7]}</p>
    <p>{CalendarUtils.formatDate(props.date)}</p>
  </div>
}

export default CalendarMonthDay;