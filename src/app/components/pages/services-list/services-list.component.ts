import { Component } from '@angular/core';
import { ServiciosService } from '../../common/services/servicios.service';
import { NotifierService } from 'angular-notifier';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent {

  private readonly notifier: NotifierService;
  servicios: Array<any> = [];

  id: any;
  name: any;
  description: any;
  price: any;
  information: any;
  category: any;
  imgServicio: any;

  constructor(private servicioServices: ServiciosService, notifierService: NotifierService,) {
      this.notifier = notifierService;
  }

  ngOnInit(){
    this.servicioServices.getServicios().subscribe((data: any) => {
      this.servicios = data;
      console.log(this.servicios);
    })
  }

  onSubmit(servicio: any): void {
    console.log('ID a eliminar:', servicio.id);
    
    const payload = {
        id: servicio.id.toString()
    };

    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    if (confirm(`¿Está seguro de que desea eliminar el servicio: ${servicio.name}?`)) {
        this.servicioServices.deleteService(payload).subscribe(
            (data: any) => {
                let respuesta = data[0];
                console.log('Respuesta del servidor:', data);
                
                if (respuesta === 'error') {
                    this.notifier.notify('error', 'No se ha podido eliminar el servicio');
                } else {
                    this.notifier.notify('success', 'Eliminado exitosamente');
                    this.loadServices();
                }
            },
            (error: HttpErrorResponse) => {
                console.error('Error:', error);
                this.notifier.notify('error', 'Error en el servidor: ' + error.message);
            }
        );
    }
  } 

  loadServices(): void {
    this.servicioServices.getServicios().subscribe(
      (data: any) => {
        this.servicios = data;
      }, 
      (error: HttpErrorResponse) => {
        console.error('Error:', error);
        this.notifier.notify('error', 'Error al cargar los servicios: ' + error.message);
      }
    );
  }
}
