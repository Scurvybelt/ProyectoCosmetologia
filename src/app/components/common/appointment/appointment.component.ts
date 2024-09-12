import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

}