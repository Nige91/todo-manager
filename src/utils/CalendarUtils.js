const zeroPad = (num, places) => String(num).padStart(places, '0');

//TODO refactor to class with static methods
let CalendarUtils = {
  addDays: (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  },

  formatDate: (date)=>{
    return zeroPad(date.getDate(), 2) + '.'
        + zeroPad(date.getMonth() + 1, 2) + '.' + date.getFullYear();
  },

  formatDateForInput: (date)=>{
    return zeroPad(date.getFullYear(), 2) + '-'
        + zeroPad(date.getMonth() +1, 2) + '-' + zeroPad(date.getDate(), 2);
  },

  /**
   *
   * @param date
   * @returns returns a list of days in this week
   */
  getWeekDaysList: (date)=>{
    let day = date.getDay();
    let result = [];

    //day = 0 is sunday, so we have to treat it differnetly
    if (day !== 0) {
      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        result.push(CalendarUtils.addDays(date, dayOfWeek - day + 1))
      }
    }
    else{
      for (let dayOfWeek = 6; dayOfWeek > -1; dayOfWeek--) {
        result.push(CalendarUtils.addDays(date, - dayOfWeek))
      }
    }
    return result;
  },

  /**
   *
   * @param date
   * @returns returns a list of all the weeks in the month, a week is a list of all the days in the week, so the result is a list of lists of days
   */
  getMonthWeeksList: (date) => {
    let dayOfMonth = date.getDate();
    let dateRunner = CalendarUtils.addDays(date, -date.getDate() + 1); //initialize to first day of month
    let result = [];
    while(dateRunner.getMonth() === date.getMonth()
        || CalendarUtils.addDays(dateRunner, -(dateRunner.getDay()+6)%7).getMonth() === date.getMonth()){
      result.push(CalendarUtils.getWeekDaysList(dateRunner)); // add the list of weekdays to the result list if dateRunner in current month
      dateRunner = CalendarUtils.addDays(dateRunner, 7); // set dateRunner to the next week
    }
    return result;
  },

  compareDate: (date1, date2) => {
    if(date1.getFullYear() !== date2.getFullYear()){
      return false;
    }
    if(date1.getMonth() !== date2.getMonth()){
      return false;
    }
    if(date1.getDate() !== date2.getDate()){
      return false;
    }
    return true;
  }
}

export default CalendarUtils;
