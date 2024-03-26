import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {

  months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Setembro", "Outrubro", "Novembro", "Dezembor"]
  weekdays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sesta-feira", "Sábado"]

  datesToCalendar: Date[] = [];
  currentDate: Date = new Date();

  constructor() {
  }

  //TODO: Full calendar must have 5 rows
  // thumbnail calendar must have 6 rows
  ngOnInit() {
    const base_second = 86400e3;
    const rightNow = Date.now();
    this.currentDate = new Date(rightNow);


    for (let day = 42; day > 0; day--) {

      const weekToEnd = 2

      const dayToCalendar = (this.currentDate.getDate() - (day + weekToEnd * 7)) * base_second
      const dateToCalendar = new Date(rightNow + dayToCalendar)

      this.datesToCalendar.push(dateToCalendar)
    }

  }


}
