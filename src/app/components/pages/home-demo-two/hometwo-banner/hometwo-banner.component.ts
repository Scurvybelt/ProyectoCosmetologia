import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-banner',
    templateUrl: './hometwo-banner.component.html',
    styleUrls: ['./hometwo-banner.component.scss']
})
export class HometwoBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    bannerContent = [
        {
            subtitle: `Centro Integral de Bienestar y Belleza`,
            title: `Más que belleza, una experiencia integral`,
            paragraph: `En Aixa Centro Integral de Bienestar y Belleza, creemos que cada persona es una obra de arte única esperando ser realzada.`,
            buttonText: `Leer Más`,
            buttonLink: `/about`,
            image: `assets/images/home-two/home-two.png`,
        }
    ]

}