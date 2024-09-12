import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    testimonialSlides: OwlOptions = {
		nav: false,
		margin: 25,
		loop: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
            '<i class="flaticon-029-back"></i>',
            '<i class="flaticon-030-next"></i>'
		],
        responsive: {
            0: {
                items: 1
            },
            515: {
                items: 2
            },
            695: {
                items: 2
            },
            935: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    }
    testimonialSlidesTwo: OwlOptions = {
		nav: false,
		margin: 25,
		loop: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
            '<i class="flaticon-029-back"></i>',
            '<i class="flaticon-030-next"></i>'
		],
        responsive: {
            0: {
                items: 1
            },
            515: {
                items: 1
            },
            695: {
                items: 2
            },
            935: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    }
    testimonialSlidesThree: OwlOptions = {
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
        center: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		navText: [
            '<i class="flaticon-029-back"></i>',
            '<i class="flaticon-030-next"></i>'
		],
        responsive: {
            0: {
                items: 1
            },
            515: {
                items: 1
            },
            695: {
                items: 2
            },
            935: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    }

    sectionTitle = [
        {
            subtitle: `Our Testimonial`,
            title: `What Our Clients Feedback`
        }
    ]
    testimonialCard = [
        {
            img: `assets/images/testimonial/testimonial-img1.jpg`,
            name: `Emanuele Ebrew`,
            designation: `Senior Manager`,
            desc: `Pellentesque habitant morbi tristique senectus  netus et malesuada fames ac turpis egestas vestibulum tortor quam feugiat vit tristique senectus.`,
            rating: [
                {
                    icon: `ri-star-fill`
                },
                {
                    icon: `ri-star-fill`
                },
                {
                    icon: `ri-star-fill`
                },
                {
                    icon: `ri-star-half-line`
                },
                {
                    icon: `ri-star-line`
                }
            ]
        },
        {
            img: `assets/images/testimonial/testimonial-img2.jpg`,
            name: `Giovanni Loren`,
            designation: `Founder`,
            desc: `Pellentesque habitant morbi tristique senectus  netus et malesuada fames ac turpis egestas vestibulum tortor quam feugiat vit tristique senectus.`,
            rating: [
                {
                    icon: `ri-star-fill`
                },
                {
                    icon: `ri-star-fill`
                },
                {
                    icon: `ri-star-fill`
                },
                {
                    icon: `ri-star-fill`
                },
                {
                    icon: `ri-star-fill`
                }
            ]
        },
        {
            img: `assets/images/testimonial/testimonial-img3.jpg`,
            name: `Massimo Pasquale`,
            designation: `Manager`,
            desc: `Pellentesque habitant morbi tristique senectus  netus et malesuada fames ac turpis egestas vestibulum tortor quam feugiat vit tristique senectus.`,
            rating: [
                {
                    icon: `ri-star-fill`
                },
                {
                    icon: `ri-star-fill`
                },
                {
                    icon: `ri-star-fill`
                },
                {
                    icon: `ri-star-fill`
                },
                {
                    icon: `ri-star-line`
                }
            ]
        },
        {
            img: `assets/images/testimonial/testimonial-img4.jpg`,
            name: `Gabriele Edoardo`,
            designation: `Developer`,
            desc: `Pellentesque habitant morbi tristique senectus  netus et malesuada fames ac turpis egestas vestibulum tortor quam feugiat vit tristique senectus.`,
            rating: [
                {
                    icon: `ri-star-fill`
                },
                {
                    icon: `ri-star-fill`
                },
                {
                    icon: `ri-star-fill`
                },
                {
                    icon: `ri-star-line`
                },
                {
                    icon: `ri-star-line`
                }
            ]
        }
    ]

}