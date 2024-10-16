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
            title: `Servicios`,
            img: `assets/images/inner-banner/inner-banner2.png`
        }
    ]
    servicesCard = [
        {
            title: `Tratamientos Corporales`,
            image: `assets/images/services/corporal.png`,
            detailsLink: `/service-details`
        },
        {
            title: `Tratamientos Faciales`,
            image: `assets/images/services/faciales.png`,
            detailsLink: `/service-details`
        },
        {
            title: `Depilación Permanente`,
            image: `assets/images/services/depilacion.png`,
            detailsLink: `/service-details`
        },
        {
            title: `Masajes`,
            image: `assets/images/services/masajes.jpg`,
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
        }*/
    ]

    currentPage : any;
    onPageChange(page: number) {
        this.currentPage = page;
        window.scrollTo(0, 0);
    }

}