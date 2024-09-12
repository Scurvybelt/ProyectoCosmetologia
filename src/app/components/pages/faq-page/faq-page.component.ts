import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-faq-page',
    templateUrl: './faq-page.component.html',
    styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

    oneAtATime = true;

    constructor() { }

    ngOnInit(): void {}

    pageTitle = [
        {
            title: `Frequently Asked Questions`,
            img: `assets/images/inner-banner/inner-banner3.png`
        }
    ]
    faqAccordion = [
        {
            faq: [
                {
                    title: `Do Blueberries have phytochemicals?`,
                    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim veniam lorem dolore magna aliqua consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut.`
                },
                {
                    title: `How Did You Find Out About Our Salon?`,
                    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim veniam lorem dolore magna aliqua consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut.`
                },
                {
                    title: `What Other Essentials Should I Bring?`,
                    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim veniam lorem dolore magna aliqua consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut.`
                },
                {
                    title: `Do I Need to Make an Appointment at the Spa?`,
                    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim veniam lorem dolore magna aliqua consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut.`
                },
                {
                    title: `How Do I Choose the Right Treatments and Products?`,
                    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim veniam lorem dolore magna aliqua consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut.`
                }
            ]
        },
        {
            faq: [
                {
                    title: `What Methods of Payment Do You Accept?`,
                    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim veniam lorem dolore magna aliqua consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut.`
                },
                {
                    title: `What if I have lost my gift certificate?`,
                    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim veniam lorem dolore magna aliqua consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut.`
                },
                {
                    title: `Do You Allow Children in the Spa?`,
                    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim veniam lorem dolore magna aliqua consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut.`
                },
                {
                    title: `Is Support for Learners Included?`,
                    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim veniam lorem dolore magna aliqua consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut.`
                },
                {
                    title: `What are the Technical Requirements for an Online Course?`,
                    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim veniam lorem dolore magna aliqua consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut.`
                }
            ]
        }
    ]

}