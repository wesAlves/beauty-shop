import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  selectedDay: Date = new Date();
  // appointments: IAppointment[] = []

  constructor() {
  }

  ngOnInit() {
  }

  serverElement(day: Date) {
    this.selectedDay = day

  }

  protected readonly onclick = onclick;
}
