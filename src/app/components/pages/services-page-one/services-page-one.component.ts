import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../common/services/servicios.service';

@Component({
    selector: 'app-services-page-one',
    templateUrl: './services-page-one.component.html',
    styleUrls: ['./services-page-one.component.scss']
})
export class ServicesPageOneComponent implements OnInit {
    selectedContent: string | null = null;

    constructor(private servicios: ServiciosService) { }

    ngOnInit(): void {
        this.servicios.getServicios().subscribe((data: any) => {
            console.log(data);
        })

        if (this.selectedContent) {
            this.servicios.getProductoByCategory(this.selectedContent).subscribe((data: any) => {
                console.log(data);
            });
        }
    }

    onServiceClick(content: string) {
        this.selectedContent = content;
        this.servicios.getProductoByCategory(this.selectedContent).subscribe((data: any) => {
            console.log(data);
          });
    }

    pageTitle = [
        {
            title: `Servicios`,
            img: `assets/images/inner-banner/inner-banner2.png`
        }
    ]
    servicesCard = [
        {
            title: `Corporales`,
            image: `assets/images/services/corporal.png`,
            detailsLink: `/service-details`
        },
        {
            title: `Faciales`,
            image: `assets/images/services/faciales.png`,
            detailsLink: `/service-details`
        },
        {
            title: `Depilación`,
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