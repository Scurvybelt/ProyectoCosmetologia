import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    imageSlides: OwlOptions = {
        items: 1,
		nav: false,
		loop: true,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
            '<i class="flaticon-029-back"></i>',
            '<i class="flaticon-030-next"></i>'
		]
    }

    aboutContent = [
        {
            subtitle: `Sobre nosotros...`,
            title: `Moisturize Your Hands Everyday`,
            title2: `Una Experiencia Única para tu Belleza Interior`,
            title3: `We Increase Your Beauty Salon & Spa`,
            desc1: `En Aixa Centro Integral de Bienestar y Belleza, nos dedicamos a realzar tu belleza natural a través de tratamientos cosmetológicos innovadores y personalizados. Nuestro equipo de profesionales expertos combina técnicas avanzadas con un servicio cálido y acogedor.`,
            desc2: `Creamos un espacio donde el bienestar y la belleza se fusionan para brindarte una experiencia única. Nos enorgullece acompañarte en tu viaje hacia la mejor versión de ti misma, cuidando cada detalle para que te sientas renovada y radiante.`,
            link: `/about`,
            image: [
                {
                    img: `assets/images/about/about-img1.jpg`
                },
                {
                    img: `assets/images/about/about-img2.jpg`
                },
                {
                    img: `assets/images/about/about-img3.jpg`
                }
            ],
            image2: `assets/images/about/about-img4.jpg`,
            image3: `assets/images/about/about-img5.jpg`,
            image4: `assets/images/about/about-sub-img.jpg`,
            experience: `20+`
        }
    ]

}