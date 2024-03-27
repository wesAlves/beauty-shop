import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {

  months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Setembro", "Outrubro", "Novembro", "Dezembor"]
  weekdays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sesta-feira", "Sábado"]

  currentDate: Date = new Date();
  // base_second = 86400e3;

  calendarByWeek: Record<string, Date[]> = {}


  constructor() {
  }

  //TODO: Full calendar must have 5 rows
  // thumbnail calendar must have 6 rows
  ngOnInit() {
    this.calendar()
  }

  calendar = () => {
    const today = new Date();
    const year = today.getFullYear();
    const monthIndex = today.getMonth();
    const weekDayIndex = today.getDay();
    const theDay = today.getDate();

    const firstDayOfMonth = this.singleDay(year, monthIndex, 1)
    const lastDayOfMonth = this.singleDay(year, monthIndex + 1, 0)

    console.log(weekDayIndex)

    for (let i = -6 - firstDayOfMonth.getDay() + 7; i < lastDayOfMonth.getDate() + 7 - lastDayOfMonth.getDay(); i++) {
      const dayDate = this.singleDay(year, monthIndex, i)

      if (!Object.keys(this.calendarByWeek).includes(String(dayDate.getDay()))) {
        this.calendarByWeek[dayDate.getDay()] = [];
      }

      this.calendarByWeek[dayDate.getDay()].push(dayDate)

    }

    return

  }

  singleDay = (year: number, month: number, day: number) => {
    return new Date(year, month, day);
  }

  protected readonly Object = Object;
}

