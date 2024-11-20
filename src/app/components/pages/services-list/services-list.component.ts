import { Component } from '@angular/core';
import { ServiciosService } from '../../common/services/servicios.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent {

  servicios: Array<any> = [];
  constructor(private servicioServices: ServiciosService) {

  }

  ngOnInit(){
    this.servicioServices.getServicios().subscribe((data: any) => {
      this.servicios = data;
      console.log(this.servicios);
    })
  }

  eliminarServicio(id: any){

  }

  editarServicio(id: any){
    
  }
}
