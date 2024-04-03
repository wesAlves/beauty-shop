import {Component, Input, OnInit} from '@angular/core';

//@ts-ignore
import {appointments} from '../../api/api';


// interface IAppointment {
//   dateTime: Date,
//   costumer: string,
//   service: string,
//   serviceDescription: string
// }

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
    // this.appointmentsByDate(this.selectedDay);
  }

  // private appointmentsByDate(day: Date) {
  //   this.appointments = [];
  //
  //   for (let appointment of appointments) {
  //     const newAppointment = {...appointment, dateTime: new Date(appointment.dateTime)}
  //
  //     if (newAppointment.dateTime.toDateString() === day.toDateString()) {
  //       this.appointments.push(newAppointment)
  //     }
  //
  //   }
  // }

  serverElement(day: Date) {
    this.selectedDay = day

    // this.appointmentsByDate(this.selectedDay);

  }

  protected readonly onclick = onclick;
}
