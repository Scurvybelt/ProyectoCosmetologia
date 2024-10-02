import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homethree-banner',
    templateUrl: './homethree-banner.component.html',
    styleUrls: ['./homethree-banner.component.scss']
})
export class HomethreeBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    bannerSlides: OwlOptions = {
        items: 1,
		nav: true,
		loop: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
        animateIn: `fadeIn`,
        animateOut: `fadeOut`,
		autoplayHoverPause: true,
		navText: [
            '<i class="flaticon-029-back"></i>',
            '<i class="flaticon-030-next"></i>'
		]
    }

    bannerContent = [
        {
            subtitle: `Nail & Beauty Salon`,
            title: `Bringing Out The Beauty in You`,
            paragraph: `Lorem ipsum dolor sit amet consectetur adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo consectetur.`,
            buttonText: `Learn More`,
            buttonLink: `/about`,
            bgImage: `assets/images/Home-three/Home-three-img1.jpg`,
        },
        {
            subtitle: `Nail & Beauty Salon`,
            title: `We’ll Style While You Smile!`,
            paragraph: `Lorem ipsum dolor sit amet consectetur adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo consectetur.`,
            buttonText: `Learn More`,
            buttonLink: `/about`,
            bgImage: `assets/images/Home-three/Home-three-img2.jpg`,
        }
    ]

}