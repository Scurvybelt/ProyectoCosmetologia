import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    imageSlides: OwlOptions = {
        items: 1,
		nav: false,
		loop: true,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
            '<i class="flaticon-029-back"></i>',
            '<i class="flaticon-030-next"></i>'
		]
    }

}