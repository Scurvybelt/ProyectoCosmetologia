import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-team-page',
    templateUrl: './team-page.component.html',
    styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    pageTitle = [
        {
            title: `Our Team`,
            img: `assets/images/inner-banner/inner-banner5.png`
        }
    ]
    teamContent = [
        {
            name: `Lorenzo Diego`,
            designation: `Nail Specialist`,
            image: `assets/images/team/team-img1.jpg`,
            detailsLink: `/team-details`,
            socials: [
                {
                    icon: `ri-facebook-fill`,
                    link: `https://www.facebook.com/`
                },
                {
                    icon: `ri-linkedin-fill`,
                    link: `https://www.linkedin.com/`
                },
                {
                    icon: `ri-twitter-fill`,
                    link: `https://twitter.com/`
                },
                {
                    icon: `ri-vimeo-fill`,
                    link: `https://vimeo.com/`
                }
            ]
        },
        {
            name: `Gabriele Edoardo`,
            designation: `Senior Stylist`,
            image: `assets/images/team/team-img2.jpg`,
            detailsLink: `/team-details`,
            socials: [
                {
                    icon: `ri-facebook-fill`,
                    link: `https://www.facebook.com/`
                },
                {
                    icon: `ri-linkedin-fill`,
                    link: `https://www.linkedin.com/`
                },
                {
                    icon: `ri-twitter-fill`,
                    link: `https://twitter.com/`
                },
                {
                    icon: `ri-vimeo-fill`,
                    link: `https://vimeo.com/`
                }
            ]
        },
        {
            name: `Matteo Lorenzo`,
            designation: `Pedicure Specialist`,
            image: `assets/images/team/team-img3.jpg`,
            detailsLink: `/team-details`,
            socials: [
                {
                    icon: `ri-facebook-fill`,
                    link: `https://www.facebook.com/`
                },
                {
                    icon: `ri-linkedin-fill`,
                    link: `https://www.linkedin.com/`
                },
                {
                    icon: `ri-twitter-fill`,
                    link: `https://twitter.com/`
                },
                {
                    icon: `ri-vimeo-fill`,
                    link: `https://vimeo.com/`
                }
            ]
        },
        {
            name: `Aaliyah Madelyn`,
            designation: `Nail Specialist`,
            image: `assets/images/team/team-img4.jpg`,
            detailsLink: `/team-details`,
            socials: [
                {
                    icon: `ri-facebook-fill`,
                    link: `https://www.facebook.com/`
                },
                {
                    icon: `ri-linkedin-fill`,
                    link: `https://www.linkedin.com/`
                },
                {
                    icon: `ri-twitter-fill`,
                    link: `https://twitter.com/`
                },
                {
                    icon: `ri-vimeo-fill`,
                    link: `https://vimeo.com/`
                }
            ]
        },
        {
            name: `Brianna Cecilia`,
            designation: `Hair Stylist`,
            image: `assets/images/team/team-img5.jpg`,
            detailsLink: `/team-details`,
            socials: [
                {
                    icon: `ri-facebook-fill`,
                    link: `https://www.facebook.com/`
                },
                {
                    icon: `ri-linkedin-fill`,
                    link: `https://www.linkedin.com/`
                },
                {
                    icon: `ri-twitter-fill`,
                    link: `https://twitter.com/`
                },
                {
                    icon: `ri-vimeo-fill`,
                    link: `https://vimeo.com/`
                }
            ]
        },
        {
            name: `Genesis Skylar`,
            designation: `Spa Specialist`,
            image: `assets/images/team/team-img6.jpg`,
            detailsLink: `/team-details`,
            socials: [
                {
                    icon: `ri-facebook-fill`,
                    link: `https://www.facebook.com/`
                },
                {
                    icon: `ri-linkedin-fill`,
                    link: `https://www.linkedin.com/`
                },
                {
                    icon: `ri-twitter-fill`,
                    link: `https://twitter.com/`
                },
                {
                    icon: `ri-vimeo-fill`,
                    link: `https://vimeo.com/`
                }
            ]
        }
    ]

}