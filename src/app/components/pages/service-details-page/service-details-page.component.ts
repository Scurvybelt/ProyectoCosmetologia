import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../../common/services/servicios.service';

@Component({
  selector: 'app-service-details-page',
  templateUrl: './service-details-page.component.html',
  styleUrls: ['./service-details-page.component.scss']
})
export class ServiceDetailsPageComponent implements OnInit {
  categoria: any;
  datosProducto: any;
  producto: any;

  constructor(private route: ActivatedRoute,private servicios: ServiciosService) { }

  ngOnInit(): void {
    this.categoria = this.route.snapshot.paramMap.get('categoria');
    console.log(this.categoria);

    this.servicios.getProductoByCategory(this.categoria).subscribe((data: any) => {
      console.log(data);
      this.datosProducto = data;
    });
  }
}
