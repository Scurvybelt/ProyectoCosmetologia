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
            subtitle: `Con los mejores precios`,
            title: `Nuestros Tratamientos`
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
            title: `Tratamientos Faciales`,
            featuresList: [
                {
                    title: `Desensibilizante`,
                    price: `$400`,
                    subtext: `Ayuda a reforzar las defensas de la piel, consiguiendo disminuir progresivamente la sensibilidad.`
                },
                {
                    title: `Despigmentante`,
                    price: `$500`,
                    subtext: `Ideal para aclarar la piel y eliminar las manchas prvocadas por el sol.`
                },
                {
                    title: `Contorno de Ojos`,
                    price: `$550`,
                    subtext: `Ideal para aclarar la piel y eliminar las manchas prvocadas por el sol.`
                },
                {
                    title: `Control de Acné`,
                    price: `$500`,
                    subtext: `Ayuda a controlar el acné.`
                },
                {
                    title: `Reafirmación`,
                    price: `$500`,
                    subtext: `Ayuda a reducir las arrugas y los ejectos del envejecimiento.`
                },
                {
                    title: `Microdermoabrasión`,
                    price: `$500`,
                    subtext: `Tratamiento estético que mejora el aspecto de nuestra piel.`
                },
                {
                    title: `Luz Pulsada`,
                    price: `$750`,
                    subtext: `Tratamiento idóneo para tratar difrentes afecciones de la piel.`
                }
            ],
            buttonText: `Booking Now`,
            buttonIcon: `flaticon-046-calendar`,
            buttonLink: `/appointment`
        },
        {
            image: `assets/images/pricing/pricing-shape.png`,
            title: `Tratamiento Faciales`,
            featuresList: [
                {
                    title: `Limpieza Facial Profunda`,
                    price: `$350`,
                    subtext: `Mejora el aspecto de la piel, corrige la dilatación de los poros, elimina las células más superficiales.`
                },
                {
                    title: `Limpieza Facial + Microdermo`,
                    price: `$500`,
                    subtext: `Elimina las capas mas superficiales de la piel, ideal para mantener la piel joven, suave y limpia.`
                },
                {
                    title: `RadioFrecuencia`,
                    price: `$550`,
                    subtext: `Combate de manera efectiva la flacidez y regenera el colágeno para lucir la piel firme y tersa.`
                },
                {
                    title: `Ultrasonido`,
                    price: `$500`,
                    subtext: `Ayuda a la prevención de arrugas mediante la regeneración de la elastina, luciendo una piel más hidratada.`
                },
                {
                    title: `Máscara Led`,
                    price: `$350`,
                    subtext: `Rejuvence las células de la piel, aumentando la hidratación de manera inmediata, reduciendo enrojecimiento e inflamación.`
                },
                {
                    title: `Hidratación`,
                    price: `$350`,
                    subtext: `Consigue una hidratación extra y el equilibrio de la piel obtenido de forma inmediata un cutis sedoso y luminoso.`
                }
            ],
            buttonText: `Booking Now`,
            buttonIcon: `flaticon-046-calendar`,
            buttonLink: `/appointment`
        },
        {
            image: `assets/images/pricing/pricing-shape.png`,
            title: `Tratamientos Corporales`,
            featuresList: [
                {
                    title: `Exfoliación`,
                    price: `$700`,
                    subtext: `Ayuda a renovar la epidermis y conservarla en buen estado y resplandeciente.`
                },
                {
                    title: `Baño de Novia`,
                    price: `$950`,
                    subtext: `Método ideal para eliminar las células muertas, rejuveneciendo la piel, dejándola suave y radiante.`
                },
                {
                    title: `Radiofrecuencia`,
                    price: `$600`,
                    subtext: `Ayuda en la formación de nuevo FALTA TEXTO `
                },
                {
                    title: `Drenaje Linfático`,
                    price: `$400`,
                    subtext: `Masaje, suave y ligero, que se aplica sobre el sistema circulatorio.`
                },
                {
                    title: `Mesoterapia Virtual`,
                    price: `$500`,
                    subtext: `Tratamiento sin agujas y sin dolor para tratar celulitis, flacidez, envejecimeinto cutáneo o estrías.`
                }
            ],
            buttonText: `Booking Now`,
            buttonIcon: `flaticon-046-calendar`,
            buttonLink: `/appointment`
        },
        {
            image: `assets/images/pricing/pricing-shape.png`,
            title: `Tratamientos Corporales`,
            featuresList: [
                {
                    title: `Glúteos`,
                    price: `$450`,
                    subtext: `Ayuda a tonificar y reafirmar la zona de los glúteos mediante el uso de aparatología medica y activos específicos.`
                },
                {
                    title: `Reductivo (100 sesiones)`,
                    price: `$4,000`,
                    subtext: `Terapia que ayuda a movilizar el tejido adiposo en personas con sobrepeso, y grasas localizadas reduciendo medidas.`
                },
                {
                    title: `Reafírmate (10 sesiones)`,
                    price: `$4,000`,
                    subtext: `Tratamiento no invasivo que combina tratamientos con aparatología medica y tratamientos manulaes para acceder de manera profunda, cómoda y segura.`
                },
                {
                    title: `Limpieza Profunda de Espalda`,
                    price: `$450`,
                    subtext: `Ayuda a la eliminación de las impurezas, barritos y espinillas, utilizando productos con principios activos saponificantes y secantes, finalizando con una mascarilla secante.`
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