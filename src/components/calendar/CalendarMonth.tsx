
import CalendarMonthDay from "./CalendarMonthDay"
import {useState} from "react"
import useTodoMap from "../../hooks/useTodoMap"
import React from "react"
import CalendarUtils from "../../utils/CalendarUtils"



const CalendarMonth: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  const todoMap = useTodoMap()

  let monthWeekList = CalendarUtils.getMonthWeeksList(selectedDate === null ? new Date() : selectedDate)

  const monthChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(evt.target.value + '-01'))
  }

  return <div className="flex flex-col space-y-2">
    <input type="month"
           className="max-w-md ml-4"
           value={selectedDate === null ? undefined : CalendarUtils.formatDateForMonthInput(selectedDate)}
           onChange={monthChangeHandler}/>
    {monthWeekList.map((week)=>{
      return <div className="flex flex-row space-x-2 ml-4" key={week[0].getDate()}>
        {week.map((date)=>{
          return <CalendarMonthDay date={date} todoMap={todoMap} key={date.getTime()} isToday={CalendarUtils.isToday(date)}/>
        })}
      </div>
    })}
  </div>
}

export default CalendarMonth