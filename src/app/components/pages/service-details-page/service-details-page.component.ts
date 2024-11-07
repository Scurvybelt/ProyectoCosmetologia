import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../../common/services/servicios.service';

@Component({
  selector: 'app-service-details-page',
  templateUrl: './service-details-page.component.html',
  styleUrls: ['./service-details-page.component.scss']
})
export class ServiceDetailsPageComponent implements OnInit {
  tratamiento: any;
  id: any;
  description: any;
  img: any;
  img2: any;
  price: any;
  information: any;
  categoria: any;
  datosProducto: any;
  producto: any;

  constructor(private route: ActivatedRoute,private servicios: ServiciosService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoria = params.get('categoria');
      // this.getServiceDetails(this.tratamiento, this.categoria);
    });

    this.servicios.getProductoByCategory(this.categoria).subscribe((data: any) => {
      // console.log(data);
      this.datosProducto = data;
    });
  }

  mandarMensaje(tratamiento: string){
    const phoneNumber = '2293676204'; // Reemplaza con el número de teléfono al que se enviará el mensaje
    const message = `Hola, me gustaría agendar una cita para el tratamiento: ${tratamiento}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  }

  descargarPdf(){
    console.log('Descargando PDF')
  }

  getServiceDetails(id: string, category: string): void {
    this.servicios.getServiceByIdAndCategory(id, category).subscribe((data: any) => {
      // console.log(data);
      
      
      if (data.length > 0) {
        // // console.log(this.information)
        let datos = data[0];
        // this.id = data[0];
        this.tratamiento = datos.name;
        this.description = datos.description;
        this.price = datos.price;
        // this.information = datos.information;
        this.img = datos.img;
        // console.log(this.img)
        // this.img2 = this.id.img2;
      }
    });
  }

  filtrarCategoria(id: any): void {
    // console.log(id);
    this.getServiceDetails(id, this.categoria);
    const element = document.querySelector('.service-details-content');
    if (element instanceof HTMLElement) {
      this.smoothScrollTo(element.offsetTop - 150, 1000); // 2000ms for slower animation
    } else {
      console.warn('Element .service-details-content not found or is not an HTMLElement');
    }
  }

  smoothScrollTo(target: number, duration: number): void {
    const start = window.pageYOffset;
    const distance = target - start;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, start, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
}
