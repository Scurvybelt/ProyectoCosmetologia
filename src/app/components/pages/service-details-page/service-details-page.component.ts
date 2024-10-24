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
  price: any;
  categoria: any;
  datosProducto: any;
  producto: any;

  constructor(private route: ActivatedRoute,private servicios: ServiciosService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoria = params.get('categoria');
      this.tratamiento = params.get('tratamiento');
      this.getServiceDetails(this.tratamiento, this.categoria);
    });

    this.servicios.getProductoByCategory(this.categoria).subscribe((data: any) => {
      console.log(data);
      this.datosProducto = data;
    });
  }

  getServiceDetails(name: string, category: string): void {
    this.servicios.getServiceByNameAndCategory(name, category).subscribe((data: any) => {
      console.log(data);
      if (data.length > 0) {
        this.id = data[0];
        this.tratamiento = this.id.name;
        this.description = this.id.description;
        this.price = this.id.price;

      }
    });
  }
}
