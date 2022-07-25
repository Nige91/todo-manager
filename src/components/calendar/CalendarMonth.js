import CalendarUtils from "../../utils/CalendarUtils";
import CalendarMonthDay from "./CalendarMonthDay";
import {useState} from "react";

function CalendarMonth(){
  const [selectedDate, setSelectedDate] = useState(new Date());

  let monthWeekList = CalendarUtils.getMonthWeeksList(selectedDate);

  const dateChangeHandler = (evt) => {
    setSelectedDate(evt.target.valueAsDate)
  }

  return <div className="flex flex-col">
    <input type="date"
           value={CalendarUtils.formatDateForInput(selectedDate)}
           onChange={dateChangeHandler}/>
    {monthWeekList.map((week)=>{
      return <div className="flex flex-row">
        {week.map((day)=>{
          return <CalendarMonthDay date={day} />
        })}
      </div>
    })}
  </div>
}

export default CalendarMonth;