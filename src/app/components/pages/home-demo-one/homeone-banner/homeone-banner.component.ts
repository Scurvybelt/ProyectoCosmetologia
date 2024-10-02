import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    bannerContent = [
        {
            subtitle: `Nail & Beauty Salon`,
            title: `We are Experience in Nail Care`,
            paragraph: `Lorem ipsum dolor sit amet consectetur adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.`,
            buttonText: `Learn More`,
            buttonLink: `/about`,
            img1: `assets/images/Home-one/woman.png`,
            img2: `assets/images/Home-one/Home-vector.png`,
            img3: `assets/images/Home-one/nail-img.jpg`
        }
    ]

}