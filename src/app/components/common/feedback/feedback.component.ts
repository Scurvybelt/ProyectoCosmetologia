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
            subtitle: `Nuestros Testimonios`,
            title: `Reseñas de Clientes`
        }
    ]
    testimonialCard = [
        {
            img: `assets/images/testimonial/cliente1.jpg`,
            name: `Lau Torales Gonzalez`,
            designation: `Cliente`,
            desc: `El trato es increible, me encanto todos los tratamientos super recomendados y el microblading lo realiza padrisimo, para esas personas que luego tienen miedo de que no les vayan a realizar un buen trabajo, en aixa Yess es super buena en lo que hace y los resultados padrisimos!!!`,
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
            img: `assets/images/testimonial/cliente2.jpg`,
            name: `Daniel Ruiz Cordova`,
            designation: `Cliente`,
            desc: `Muy buena atención y buenos tratamientos`,
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
            img: `assets/images/testimonial/cliente3.jpg`,
            name: `Margaret Ramirez`,
            designation: `Cliente`,
            desc: `Excelente trato y super recomendados los tratamientos.`,
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
            img: `assets/images/testimonial/cliente4.jpg`,
            name: `Issa A-secas`,
            designation: `Cliente`,
            desc: `Super atención, perfecto para consentirte!
Y todo está muy limpio! Recomendado ampliamente`,
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
        }
    ]

}