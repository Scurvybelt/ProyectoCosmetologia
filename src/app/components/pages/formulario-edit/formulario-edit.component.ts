import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { CartService } from 'src/app/cart.service';
import { ServiciosService } from '../../common/services/servicios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-edit',
  templateUrl: './formulario-edit.component.html',
  styleUrls: ['./formulario-edit.component.scss']
})
export class FormularioEditComponent implements OnInit{
    servicioForm: FormGroup;

  private readonly notifier: NotifierService;
    productsUrl: any = [];
    products = this.cartService.getItems();
    total = this.cartService.getTotal();

    name: any;
    description: any;
    price: any;
    information: any;
    category: any;

    imgServicio: any;

    id: any = null;
    titulo: string = '';

    constructor(
        private formBuilder: UntypedFormBuilder,
        private cartService: CartService,
        private http: HttpClient,
        notifierService: NotifierService,
        private servicioServices: ServiciosService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.servicioForm = this.formBuilder.group({
            name: ['', Validators.required],
            category: ['', Validators.required],
            price: ['', [Validators.required]],
            description: ['', [Validators.required]],
            information: ['', [Validators.required]],
        });
        this.notifier = notifierService;
    }

    ngOnInit(){
        this.id = this.route.snapshot.paramMap.get('id');  
        if(this.id){
            this.titulo = 'Modificar servicio';
        }else{
            this.titulo = 'Nuevo servicio';
        }
        
        if(this.id){
            this.servicioServices.getProductoById(this.id).subscribe((data: any) => {
                console.log(data);
                this.name = data.name;
                this.category = data.category;
                this.description = data.description;
                this.price = data.price;
                this.information = data.information;
                this.imgServicio = data.img;

                this.servicioForm = this.formBuilder.group({
                    name: [this.name, Validators.required],
                    category: [this.category, Validators.required],
                    price: [this.price, [Validators.required]],
                    description: [this.description, [Validators.required]],
                    information: [this.information, [Validators.required]],
                });
            });
        }
    }

    regresar(){
        window.history.back();
    }

    onSubmit(): void {
        console.log(this.id);
        if (this.servicioForm.invalid) {
            this.servicioForm.markAllAsTouched();
        } else {
            const name = this.servicioForm.get('name')?.value;
            const category = this.servicioForm.get('category')?.value;
            const price = this.servicioForm.get('price')?.value;
            const description = this.servicioForm.get('description')?.value;
            const information = this.servicioForm.get('information')?.value;

            if (this.id) {
                this.servicioServices.updateService(this.id, name, category, price, description, information)
                    .subscribe(
                        (data: any) => {
                            let respuesta = data[0];
                            console.log(data);
                            if (respuesta === 'error') {
                                this.notifier.notify('error', 'Ups! Hubo un error al guardar cambios');
                            } else {
                                this.notifier.notify('success', 'Guardado exitosamente');
                                this.router.navigate(['/admin']);
                            }
                        },
                        (error: HttpErrorResponse) => {
                            console.error('Error:', error);
                            this.notifier.notify('error', 'Error en el servidor: ' + error.message);
                        }
                    );
            } else {
                this.servicioServices.createService(name, category, price, description, information)
                    .subscribe(
                        (data: any) => {
                            let respuesta = data[0];
                            console.log(data);
                            if (respuesta === 'error') {
                                this.notifier.notify('error', 'Ups! Hubo un error al crear el servicio');
                            } else {
                                this.notifier.notify('success', 'Creado exitosamente');
                                this.router.navigate(['/admin']);
                            }
                        },
                        (error: HttpErrorResponse) => {
                            console.error('Error:', error);
                            this.notifier.notify('error', 'Error en el servidor: ' + error.message);
                        }
                    );
            }
        }
    }
}
