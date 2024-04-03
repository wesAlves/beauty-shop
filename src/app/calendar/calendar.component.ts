import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  @Output() daySelected = new EventEmitter<Date>()

  months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outrubro", "Novembro", "Dezembro"]
  weekdays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sesta-feira", "Sábado"]

  currentDate: Date = new Date();
  calendarByWeek: Date[] = []
  displayedMonth = 0
  selectedDay = this.currentDate

  selectedDate = this.currentDate;


  constructor(private route: ActivatedRoute) {
  }

//TODO: Full calendar must have 5 rows
// thumbnail calendar must have 6 rows
  ngOnInit() {
    this.displayedMonth = this.currentDate.getMonth();
    this.calendar(this.currentDate.getFullYear(), this.displayedMonth)

    this.route.queryParams
      .subscribe(
        (qParams: Params) => {
          const {year, month, date} = qParams;

          if(year && month && date){
            this.selectedDate = new Date(year, month, date)
          }

          console.log(this.selectedDate)

        }
      )


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

  today() {
    this.displayedMonth = this.currentDate.getMonth();
    this.calendar(this.currentDate.getFullYear(), this.displayedMonth)
  }

  selectDay(day: Date) {
    this.selectedDay = day;
    this.daySelected.emit(this.selectedDay);
  }

}

