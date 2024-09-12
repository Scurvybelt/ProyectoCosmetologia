import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-services-page-two',
    templateUrl: './services-page-two.component.html',
    styleUrls: ['./services-page-two.component.scss']
})
export class ServicesPageTwoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}
    
    pageTitle = [
        {
            title: `Services Style Two`,
            img: `assets/images/inner-banner/inner-banner3.png`
        }
    ]
    servicesItem = [
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
        },
        {
            title: `Body Massage`,
            icon: `flaticon-088-manicure`,
            desc: `Lorem Ipsum has been the industry sta dummy text ever since the 1500s, when an unknown printer took a galley of type.`,
            image: `assets/images/services/services-img10.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Art Nail & Effects`,
            icon: `flaticon-136-epilator`,
            desc: `Lorem Ipsum has been the industry sta dummy text ever since the 1500s, when an unknown printer took a galley of type.`,
            image: `assets/images/services/services-img15.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Classic Nail`,
            icon: `flaticon-146-comb`,
            desc: `Lorem Ipsum has been the industry sta dummy text ever since the 1500s, when an unknown printer took a galley of type.`,
            image: `assets/images/services/services-img14.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Art Nail & Effects`,
            icon: `flaticon-136-epilator`,
            desc: `Lorem Ipsum has been the industry sta dummy text ever since the 1500s, when an unknown printer took a galley of type.`,
            image: `assets/images/services/services-img15.jpg`,
            detailsLink: `/service-details`
        },
        {
            title: `Classic Nail`,
            icon: `flaticon-146-comb`,
            desc: `Lorem Ipsum has been the industry sta dummy text ever since the 1500s, when an unknown printer took a galley of type.`,
            image: `assets/images/services/services-img14.jpg`,
            detailsLink: `/service-details`
        }
    ]

    currentPage : any;
    onPageChange(page: number) {
        this.currentPage = page;
        window.scrollTo(0, 0);
    }

}