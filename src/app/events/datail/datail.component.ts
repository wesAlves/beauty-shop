import {Component, Input, OnInit} from '@angular/core';
import {appointments} from "../../../api/api";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-datail',
  templateUrl: './datail.component.html',
  styleUrl: './datail.component.scss'
})

export class DatailComponent implements OnInit {

  @Input() appointment = {
    id: 1,
    dateTime: new Date("2024-04-02T15:31:16.998Z"),
    costumer: "Jose Diaz Muñoz",
    service: "Nails cutting",
    serviceDescription: "Cutting nails and polish, apply finish stain"
  }

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        const {id} = params;

        this.appointment = this.getAppointment(id)

      })

  }

  getAppointment(id: number | string) {
    const foundAppointment = appointments.find(appointment => appointment.id === Number(id))

    if (foundAppointment) {
      return {...foundAppointment, dateTime: new Date(foundAppointment.dateTime)};
    }

    return this.appointment
  }

}
