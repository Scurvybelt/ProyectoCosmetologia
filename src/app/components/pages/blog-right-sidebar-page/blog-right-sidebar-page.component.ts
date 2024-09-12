import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blog-right-sidebar-page',
    templateUrl: './blog-right-sidebar-page.component.html',
    styleUrls: ['./blog-right-sidebar-page.component.scss']
})
export class BlogRightSidebarPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

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
        },
        {
            title: `How To Strengthen Brittle Nails Naturally`,
            image: `assets/images/blog/blog-img4.jpg`,
            detailsLink: `/blog-details`,
            author: `Admin`,
            date: `Oct 11, 2023`,
        },
        {
            title: `How To Nourish And Protect Your Nails`,
            image: `assets/images/blog/blog-img5.jpg`,
            detailsLink: `/blog-details`,
            author: `Admin`,
            date: `Oct 10, 2023`,
        },
        {
            title: `How To Nourish And Protect Your Body Skin`,
            image: `assets/images/blog/blog-img6.jpg`,
            detailsLink: `/blog-details`,
            author: `Admin`,
            date: `Oct 09, 2023`,
        },
        {
            title: `Happy Hands Nail Polish And Exclusive Collection`,
            image: `assets/images/blog/blog-img6.jpg`,
            detailsLink: `/blog-details`,
            author: `Admin`,
            date: `Oct 08, 2023`,
        },
        {
            title: `Why You Should Use Non-Toxic Nail Polish`,
            image: `assets/images/blog/blog-img5.jpg`,
            detailsLink: `/blog-details`,
            author: `Admin`,
            date: `Oct 07, 2023`,
        },
        {
            title: `Organize Your Nail Polishes! 5 Creative Ways To Do Polish`,
            image: `assets/images/blog/blog-img4.jpg`,
            detailsLink: `/blog-details`,
            author: `Admin`,
            date: `Oct 06, 2023`,
        },
        {
            title: `How To Strengthen Brittle Nails Naturally`,
            image: `assets/images/blog/blog-img3.jpg`,
            detailsLink: `/blog-details`,
            author: `Admin`,
            date: `Oct 05, 2023`,
        },
        {
            title: `How To Nourish And Protect Your Nails`,
            image: `assets/images/blog/blog-img2.jpg`,
            detailsLink: `/blog-details`,
            author: `Admin`,
            date: `Oct 04, 2023`,
        },
        {
            title: `How To Nourish And Protect Your Body Skin`,
            image: `assets/images/blog/blog-img1.jpg`,
            detailsLink: `/blog-details`,
            author: `Admin`,
            date: `Oct 03, 2023`,
        }
    ]

    currentPage : any;
    onPageChange(page: number) {
        this.currentPage = page;
        window.scrollTo(0, 0);
    }

}