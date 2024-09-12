import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    sectionTitle = [
        {
            subtitle: `News Feed`,
            title: `Our Latest Blog Update`
        }
    ]
    blogCard = [
        {
            title: `Happy Hands Nail Polish And Exclusive Collection`,
            image: `assets/images/blog/blog-img1.jpg`,
            detailsLink: `/blog-details`,
            author: `Admin`,
            date: `Oct 14, 2023`,
        },
        {
            title: `Why You Should Use Non-Toxic Nail Polish`,
            image: `assets/images/blog/blog-img2.jpg`,
            detailsLink: `/blog-details`,
            author: `Admin`,
            date: `Oct 13, 2023`,
        },
        {
            title: `Organize Your Nail Polishes! 5 Creative Ways To Do Polish`,
            image: `assets/images/blog/blog-img3.jpg`,
            detailsLink: `/blog-details`,
            author: `Admin`,
            date: `Oct 12, 2023`,
        }
    ]

}