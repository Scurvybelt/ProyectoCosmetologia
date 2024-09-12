import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner-form',
    templateUrl: './banner-form.component.html',
    styleUrls: ['./banner-form.component.scss']
})
export class BannerFormComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    mytime: Date = new Date();

}