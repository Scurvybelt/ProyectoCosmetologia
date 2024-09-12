import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-instagram',
    templateUrl: './instagram.component.html',
    styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

}