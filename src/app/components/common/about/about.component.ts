import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

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

    aboutContent = [
        {
            subtitle: `About Us`,
            title: `Moisturize Your Hands Everyday`,
            title2: `An Experiences SPA Care For Your Beauty`,
            title3: `We Increase Your Beauty Salon & Spa`,
            desc1: `Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled but also the leap into electronic typesetting.`,
            desc2: `Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type.`,
            link: `/about`,
            image: [
                {
                    img: `assets/images/about/about-img1.jpg`
                },
                {
                    img: `assets/images/about/about-img2.jpg`
                },
                {
                    img: `assets/images/about/about-img3.jpg`
                }
            ],
            image2: `assets/images/about/about-img4.jpg`,
            image3: `assets/images/about/about-img5.jpg`,
            image4: `assets/images/about/about-sub-img.jpg`,
            experience: `20+`
        }
    ]

}