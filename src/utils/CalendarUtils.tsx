const zeroPad = (num: number, places: number) => String(num).padStart(places, '0');

class CalendarUtils{
  static addDays(date: Date, days: number){
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  static formatDate(date: Date){
    return zeroPad(date.getDate(), 2) + '.'
        + zeroPad(date.getMonth() + 1, 2) + '.' + date.getFullYear();
  }

  static formatDateForDateInput(date: Date){
    return zeroPad(date.getFullYear(), 2) + '-'
        + zeroPad(date.getMonth() +1, 2) + '-' + zeroPad(date.getDate(), 2);
  }

  static formatDateForMonthInput(date: Date){
    return zeroPad(date.getFullYear(), 2) + '-'
        + zeroPad(date.getMonth() +1, 2);
  }

  /**
   *
   * @param date
   * @returns returns a list of days in this week
   */
  static getWeekDaysList(date: Date){
    let day = date.getDay();
    let result = [];

    //day = 0 is sunday, so we have to treat it differnetly
    if (day !== 0) {
      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        result.push(this.addDays(date, dayOfWeek - day + 1))
      }
    }
    else{
      for (let dayOfWeek = 6; dayOfWeek > -1; dayOfWeek--) {
        result.push(this.addDays(date, - dayOfWeek))
      }
    }
    return result;
  }

  /**
   *
   * @param date
   * @returns returns a list of all the weeks in the month, a week is a list of all the days in the week, so the result is a list of lists of days
   */
  static getMonthWeeksList(date: Date){
    let dayOfMonth = date.getDate();
    let dateRunner = this.addDays(date, -date.getDate() + 1); //initialize to first day of month
    let result = [];
    while(dateRunner.getMonth() === date.getMonth()
        || this.addDays(dateRunner, -(dateRunner.getDay()+6)%7).getMonth() === date.getMonth()){
      result.push(this.getWeekDaysList(dateRunner)); // add the list of weekdays to the result list if dateRunner in current month
      dateRunner = this.addDays(dateRunner, 7); // set dateRunner to the next week
    }
    return result;
  }

  static compareDate(date1: Date, date2: Date){
    if(date1 === null || date2 === null){
      return false;
    }
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
