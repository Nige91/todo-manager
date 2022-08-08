import CalendarUtils from "../../utils/CalendarUtils";
import CalendarMonthDay from "./CalendarMonthDay";
import {useState} from "react";
import useTodoMap from "../../hooks/useTodoMap";

function CalendarMonth(){
  const [selectedDate, setSelectedDate] = useState(new Date());

  const todoMap = useTodoMap();

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
        {week.map((date)=>{
          return <CalendarMonthDay date={date} todoMap={todoMap}/>
        })}
      </div>
    })}
  </div>
}

export default CalendarMonth;