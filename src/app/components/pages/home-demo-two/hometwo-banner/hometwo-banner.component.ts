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
            subtitle: `Nail & Beauty Salon`,
            title: `A Wonderful Place to Be Wonderful`,
            paragraph: `Lorem ipsum dolor sit amet consectetur adipiscing elit Ut elit tellus luctus nec mattis pulvinar dapibus leo consectetur.`,
            buttonText: `Learn More`,
            buttonLink: `/about`,
            image: `assets/images/home-two/home-two.png`,
        }
    ]

}