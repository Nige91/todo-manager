
import CalendarMonthDay from "./CalendarMonthDay";
import {useState} from "react";
import useTodoMap from "../../hooks/useTodoMap";
import React from "react";
import CalendarUtils from "../../utils/CalendarUtils";



const CalendarMonth: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const todoMap = useTodoMap();

  let monthWeekList = CalendarUtils.getMonthWeeksList(selectedDate === null ? new Date() : selectedDate);

  const dateChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(evt.target.valueAsDate)
  }

  return <div className="flex flex-col">
    <input type="date"
           value={selectedDate === null ? undefined : CalendarUtils.formatDateForInput(selectedDate)}
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