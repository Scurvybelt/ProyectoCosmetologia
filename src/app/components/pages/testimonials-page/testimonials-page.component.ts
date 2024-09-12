import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-testimonials-page',
    templateUrl: './testimonials-page.component.html',
    styleUrls: ['./testimonials-page.component.scss']
})
export class TestimonialsPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    pageTitle = [
        {
            title: `Testimonials`,
            img: `assets/images/inner-banner/inner-banner2.png`
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
        },
        {
            img: `assets/images/testimonial/testimonial-img5.jpg`,
            name: `Matteo Lorenzo`,
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
            img: `assets/images/testimonial/testimonial-img6.jpg`,
            name: `Aaliyah Madelyn`,
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
        }
    ]

}