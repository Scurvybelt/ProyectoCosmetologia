import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    servicesSlides: OwlOptions = {
		nav: true,
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

    sectionTitle = [
        {
            subtitle: `Nuestros Categorías`,
            title: `¿Qué Ofrecemos?`
        }
    ]
    servicesCard = [
        {
            title: `Corporales`,
            image: `assets/images/services/services-img1.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Faciales`,
            image: `assets/images/services/services-img2.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Depilación`,
            image: `assets/images/services/services-img3.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Masajes`,
            image: `assets/images/services/services-img4.jpg`,
            detailsLink: `/service-details`
        }
        /*{
            title: `Classic Nail Manicure`,
            image: `assets/images/services/services-img5.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Art Nail & Effects`,
            image: `assets/images/services/services-img6.jpg`,
            detailsLink: `/service-details`
        }*/
    ]
    servicesItem = [
        {
            title: `Faciales`,
            icon: `flaticon-066-relax`,
            image: `assets/images/services/faciales.png`,
            detailsLink: `/service-details`
        },
        {
            title: `Depilación`,
            icon: `flaticon-067-cosmetics`,
            image: `assets/images/services/depilacion.png`,
            detailsLink: `/service-details`
        },
        {
            title: `Corporales`,
            icon: `flaticon-068-make-up`,
            image: `assets/images/services/corporal.png`,
            detailsLink: `/service-details`
        },
        {
            title: `Masajes`,
            icon: `flaticon-069-make-up-1`,
            image: `assets/images/services/masajes.jpg`,
            detailsLink: `/service-details`
        }
    ]
    servicesItemTwo = [
        {
            title: `Makeup Lesson`,
            icon: `flaticon-081-wash-face`,
            desc: `Lorem Ipsum has been the industry sta dummy text ever since the 1500s, when an unknown printer took a galley of type.`,
            image: `assets/images/services/services-img7.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Bridal Beauty Makeup`,
            icon: `flaticon-084-laser`,
            desc: `Lorem Ipsum has been the industry sta dummy text ever since the 1500s, when an unknown printer took a galley of type.`,
            image: `assets/images/services/services-img8.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Hair Coloring`,
            icon: `flaticon-086-hair-straightener`,
            desc: `Lorem Ipsum has been the industry sta dummy text ever since the 1500s, when an unknown printer took a galley of type.`,
            image: `assets/images/services/services-img9.jpg`,
            detailsLink: `/service-details`
        }
    ]

}