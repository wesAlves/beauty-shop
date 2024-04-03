import {Component, Input, OnInit} from '@angular/core';
import {appointments} from "../../api/api";
import {ActivatedRoute, Params, provideRouter} from "@angular/router";


interface IAppointment {
  id: number,
  dateTime: Date,
  costumer: string,
  service: string,
  serviceDescription: string
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  appointments: IAppointment[] = []
  month: string = "";
  year: string = "";
  date: string = "";


  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(
        (qParams: Params) => {
          const {year, month, date} = qParams

          this.appointmentsByDate(new Date(year, month, date))
        }
  )

  }

  private appointmentsByDate(day: Date) {
    this.appointments = [];

    for (let appointment of appointments) {
      const newAppointment = {...appointment, dateTime: new Date(appointment.dateTime)}

      if (newAppointment.dateTime.toDateString() === day.toDateString()) {
        this.appointments.push(newAppointment)
      }

    }
  }

  protected readonly provideRouter = provideRouter;
  protected readonly navigator = navigator;
}
