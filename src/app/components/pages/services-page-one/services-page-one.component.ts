import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-services-page-one',
    templateUrl: './services-page-one.component.html',
    styleUrls: ['./services-page-one.component.scss']
})
export class ServicesPageOneComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    pageTitle = [
        {
            title: `Services Style One`,
            img: `assets/images/inner-banner/inner-banner2.png`
        }
    ]
    servicesCard = [
        {
            title: `Glitter For Nail Art`,
            image: `assets/images/services/services-img1.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Classic Nail Pedicure`,
            image: `assets/images/services/services-img2.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Paraffin For Nail Hands`,
            image: `assets/images/services/services-img3.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Deep Paraffin Waxing`,
            image: `assets/images/services/services-img4.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Classic Nail Manicure`,
            image: `assets/images/services/services-img5.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Art Nail & Effects`,
            image: `assets/images/services/services-img6.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Deep Paraffin Waxing`,
            image: `assets/images/services/services-img4.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Classic Nail Manicure`,
            image: `assets/images/services/services-img5.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Art Nail & Effects`,
            image: `assets/images/services/services-img6.jpg`,
            detailsLink: `/service-details`
        }
    ]

    currentPage : any;
    onPageChange(page: number) {
        this.currentPage = page;
        window.scrollTo(0, 0);
    }

}