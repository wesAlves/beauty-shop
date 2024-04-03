import {AfterContentInit, ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params, Route, Router} from "@angular/router";

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
  selectedDay = this.currentDate;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private cd: ChangeDetectorRef) {
  }


  ngOnInit() {

    this.activatedRoute.queryParams
      .subscribe(
        (qParams: Params) => {
          const {year, month, date} = qParams;

          if (year && month && date) {
            const selectedDate = new Date(year, month, date)

            this.displayedMonth = selectedDate.getMonth();
            this.calendar(this.selectedDay.getFullYear(), this.displayedMonth)
            this.selectDay(selectedDate)
          } else {
            this.displayedMonth = this.currentDate.getMonth();
            this.calendar(this.currentDate.getFullYear(), this.displayedMonth)
          }
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
    this.selectDay(this.currentDate)
  }

  selectDay(day: Date) {

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {month: day.getMonth(), year: day.getFullYear(), date: day.getDate()}
    })

    Promise.resolve().then(() => this.daySelected.emit(day)); //promise to avoid error
    this.selectedDay = day;


  }

}

