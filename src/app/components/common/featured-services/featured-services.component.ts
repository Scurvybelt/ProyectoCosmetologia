import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-featured-services',
    templateUrl: './featured-services.component.html',
    styleUrls: ['./featured-services.component.scss']
})
export class FeaturedServicesComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    featuresCard = [
        {
            title: `LED Cured Gel Polish`,
            icon: `flaticon-175-makeup-7`,
            image: `assets/images/features/features-img1.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `No Damaging Acrylics`,
            icon: `flaticon-066-relax`,
            image: `assets/images/features/features-img2.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Nail Experts Burlington`,
            icon: `flaticon-make-up-8`,
            image: `assets/images/features/features-img3.jpg`,
            detailsLink: `/service-details`
        }
    ]
    featuresItem = [
        {
            title: `Body Treatment`,
            icon: `assets/images/features/features1.png`,
            desc: `Lorem ipsum dolor sit amet con ctetur adipiscing elit ut.`
        },
        {
            title: `Face Treatment`,
            icon: `assets/images/features/features2.png`,
            desc: `Lorem ipsum dolor sit amet con ctetur adipiscing elit ut.`
        },
        {
            title: `Sports Massage`,
            icon: `assets/images/features/features3.png`,
            desc: `Lorem ipsum dolor sit amet con ctetur adipiscing elit ut.`
        },
        {
            title: `Aroma Therapy`,
            icon: `assets/images/features/features4.png`,
            desc: `Lorem ipsum dolor sit amet con ctetur adipiscing elit ut.`
        }
    ]
    featuresCardTwo = [
        {
            title: `LED Cured Gel Polish`,
            icon: `flaticon-175-makeup-7`,
            image: `assets/images/features/features-img4.jpg`,
            detailsLink: `/service-details`,
            desc: `Lorem ipsum dolor sit amet con ctetur elit ut Donec pretium egestas.`
        },
        {
            title: `No Damaging Acrylics`,
            icon: `flaticon-066-relax`,
            image: `assets/images/features/features-img5.jpg`,
            detailsLink: `/service-details`,
            desc: `Lorem ipsum dolor sit amet con ctetur elit ut Donec pretium egestas.`
        },
        {
            title: `Nail Experts Burlington`,
            icon: `flaticon-make-up-8`,
            image: `assets/images/features/features-img6.jpg`,
            detailsLink: `/service-details`,
            desc: `Lorem ipsum dolor sit amet con ctetur elit ut Donec pretium egestas.`
        }
    ]

}