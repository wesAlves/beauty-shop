import {Component, Input, OnInit} from '@angular/core';
import {appointments} from "../../../api/api";

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

  constructor() {
  }

  ngOnInit() {
  }

}
