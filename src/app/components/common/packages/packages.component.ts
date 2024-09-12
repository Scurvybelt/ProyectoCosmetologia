import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-packages',
    templateUrl: './packages.component.html',
    styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    sectionTitle = [
        {
            subtitle: `Best Deals`,
            title: `Our Best Price Packages`
        }
    ]
    pricingCard = [
        {
            text: [
                {
                    image: `assets/images/pricing/pricing-img1.jpg`,
                    title: `Gel Coloring`,
                    desc: `Donec pretium egestas sapien mollis. Pellen tesqueet dolor elem entum etos.`,
                    price: `$15.00`
                },
                {
                    image: `assets/images/pricing/pricing-img2.jpg`,
                    title: `Pedicure`,
                    desc: `Donec pretium egestas sapien mollis. Pellen tesqueet dolor elem entum etos.`,
                    price: `$15.00`
                },
                {
                    image: `assets/images/pricing/pricing-img3.jpg`,
                    title: `Manicure`,
                    desc: `Donec pretium egestas sapien mollis. Pellen tesqueet dolor elem entum etos.`,
                    price: `$15.00`
                }
            ]
        },
        {
            text: [
                {
                    image: `assets/images/pricing/pricing-img4.jpg`,
                    title: `Nail Polishing`,
                    desc: `Donec pretium egestas sapien mollis. Pellen tesqueet dolor elem entum etos.`,
                    price: `$50.00`
                },
                {
                    image: `assets/images/pricing/pricing-img5.jpg`,
                    title: `Nail Trim`,
                    desc: `Donec pretium egestas sapien mollis. Pellen tesqueet dolor elem entum etos.`,
                    price: `$30.00`
                },
                {
                    image: `assets/images/pricing/pricing-img6.jpg`,
                    title: `Sticker Deco`,
                    desc: `Donec pretium egestas sapien mollis. Pellen tesqueet dolor elem entum etos.`,
                    price: `$25.00`
                }
            ]
        }
    ]
    pricingItem = [
        {
            image: `assets/images/pricing/pricing-shape.png`,
            title: `Basic Plan`,
            featuresList: [
                {
                    title: `Body Massage`,
                    price: `$12`,
                    subtext: `Clean 20-30 Minutes`
                },
                {
                    title: `Facials`,
                    price: `$20`,
                    subtext: `Clean 20-30 Minutes`
                },
                {
                    title: `Hands & Feet`,
                    price: `$24`,
                    subtext: `Clean 30-40 Minutes`
                }
            ],
            buttonText: `Booking Now`,
            buttonIcon: `flaticon-046-calendar`,
            buttonLink: `/appointment`
        },
        {
            image: `assets/images/pricing/pricing-shape.png`,
            title: `Standard Plan`,
            featuresList: [
                {
                    title: `Massage Therapy`,
                    price: `$32`,
                    subtext: `Clean 40-50 Minutes`
                },
                {
                    title: `Waxing`,
                    price: `$29`,
                    subtext: `Clean 20-30 Minutes`
                },
                {
                    title: `Rest & Relaxation`,
                    price: `$42`,
                    subtext: `Clean 30-35 Minutes`
                }
            ],
            buttonText: `Booking Now`,
            buttonIcon: `flaticon-046-calendar`,
            buttonLink: `/appointment`
        },
        {
            image: `assets/images/pricing/pricing-shape.png`,
            title: `Premium Plan`,
            featuresList: [
                {
                    title: `Full Body Massage`,
                    price: `$125`,
                    subtext: `Clean 60-80 Minutes`
                },
                {
                    title: `Personalized Massage`,
                    price: `$150`,
                    subtext: `Clean 30-40 Minutes`
                },
                {
                    title: `Couple Massage`,
                    price: `$180`,
                    subtext: `Clean 20-30 Minutes`
                }
            ],
            buttonText: `Booking Now`,
            buttonIcon: `flaticon-046-calendar`,
            buttonLink: `/appointment`
        }
    ]
    pricingItemTwo = [
        {
            image: `assets/images/pricing/pricing-img7.jpg`,
            price: `$25`,
            subtext: `Starting From:`,
            title: `Hair Cut`,
            featuresList: [
                {
                    title: `Teen’s Hair Cut`,
                    price: `$45`,
                },
                {
                    title: `Men’s Hair Cut`,
                    price: `$42`,
                },
                {
                    title: `Children’s Hair Cut`,
                    price: `$56`,
                },
                {
                    title: `Women’s Hair Cut`,
                    price: `$76`,
                }
            ],
            buttonText: `Appointment Now`,
            buttonIcon: `flaticon-046-calendar`,
            buttonLink: `/appointment`
        },
        {
            image: `assets/images/pricing/pricing-img8.jpg`,
            price: `$35`,
            subtext: `Starting From:`,
            title: `Makeup`,
            featuresList: [
                {
                    title: `Just Eyes`,
                    price: `$40`,
                },
                {
                    title: `Bridal Trail`,
                    price: `$45`,
                },
                {
                    title: `Regular Makeup`,
                    price: `$50`,
                },
                {
                    title: `Quick Fix Makeup`,
                    price: `$120`,
                }
            ],
            buttonText: `Appointment Now`,
            buttonIcon: `flaticon-046-calendar`,
            buttonLink: `/appointment`
        },
        {
            image: `assets/images/pricing/pricing-img9.jpg`,
            price: `$50`,
            subtext: `Starting From:`,
            title: `Hair Color`,
            featuresList: [
                {
                    title: `Teen’s Hair Color`,
                    price: `$40`,
                },
                {
                    title: `Men’s Hair Color`,
                    price: `$60`,
                },
                {
                    title: `Children’s Hair Color`,
                    price: `$80`,
                },
                {
                    title: `Women’s Hair Color`,
                    price: `$100`,
                }
            ],
            buttonText: `Appointment Now`,
            buttonIcon: `flaticon-046-calendar`,
            buttonLink: `/appointment`
        }
    ]

}