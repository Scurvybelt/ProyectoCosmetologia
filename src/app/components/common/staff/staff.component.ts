import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    sectionTitle = [
        {
            subtitle: `Our Staff`,
            title: `Our Excellent & Expert Staff`
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
        }
    ]

}