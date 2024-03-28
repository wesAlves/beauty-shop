import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {

  months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outrubro", "Novembro", "Dezembro"]
  weekdays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sesta-feira", "Sábado"]

  currentDate: Date = new Date();
  calendarByWeek: Date[] = []
  displayedMonth = 0


  constructor() {
  }

//TODO: Full calendar must have 5 rows
// thumbnail calendar must have 6 rows
  ngOnInit() {
    this.displayedMonth = this.currentDate.getMonth();
    this.calendar(this.currentDate.getFullYear(), this.displayedMonth)
  }

  calendar = (year: number = 0, month: number = 0, day: number = 0) => {
    const firstDayOfMonth = this.singleDay(year, month, 1)
    const lastDayOfMonth = this.singleDay(year, month + 1, 0)

    if (this.calendarByWeek.length > 0) {
      this.calendarByWeek.splice(0, this.calendarByWeek.length)
    }

    const loopControllerStart = -6 - firstDayOfMonth.getDay() + 7 <= 0 ? -6 - firstDayOfMonth.getDay() + 7 : -6
    const loopControllerEnd = lastDayOfMonth.getDate() + 7 - lastDayOfMonth.getDay()

    for (let i = loopControllerStart; i < loopControllerEnd; i++) {
      const dayDate = this.singleDay(year, month, i)
      this.calendarByWeek.push(dayDate)
    }
  }

  singleDay = (year: number, month: number, day: number) => {
    return new Date(year, month, day);
  }

  offSetMonth(month: number) {
    this.displayedMonth = this.displayedMonth + month
    this.calendar(this.currentDate.getFullYear(), this.displayedMonth)
  }

  today(){
    this.displayedMonth = this.currentDate.getMonth();
    this.calendar(this.currentDate.getFullYear(), this.displayedMonth)
  }

}

