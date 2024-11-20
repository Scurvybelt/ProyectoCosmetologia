import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { CartService } from 'src/app/cart.service';
import { ServiciosService } from '../../common/services/servicios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-edit',
  templateUrl: './formulario-edit.component.html',
  styleUrls: ['./formulario-edit.component.scss']
})
export class FormularioEditComponent {
  private readonly notifier: NotifierService;
    productsUrl: any = [];
    products = this.cartService.getItems();
    total = this.cartService.getTotal();

    checkoutForm = this.formBuilder.group({
        fullname: 'John Doe',
        address: '234 Church Street Colloyn PRETORIA 0083 SOUTH AFRICA',
        city: 'Colloyn',
        email: 'john.doe@ohix.com',
    });
    servicio: any;
    imgServicio: any;
    servicioForm: FormGroup;
    id: any = null;
    titulo: string = '';

    constructor(
        private formBuilder: UntypedFormBuilder,
        private cartService: CartService,
        private http: HttpClient,
        notifierService: NotifierService,
        private servicioServices: ServiciosService,
        private route: ActivatedRoute
    ) {
        this.servicioForm = this.formBuilder.group({
            name: ['', Validators.required],
            categoria: ['', Validators.required],
            price: ['', [Validators.required]],
            descripcion: ['', [Validators.required]],
        });
        this.notifier = notifierService;
    }

    ngOnInit(){
        this.id = this.route.snapshot.paramMap.get('id');  
        if(this.id){
            this.titulo = 'Editar Servicio';
        }else{
            this.titulo = 'Crear Servicio';
        }
        
        if(this.id){
            this.servicioServices.getProductoById(this.id).subscribe((data: any) => {
                console.log(data);
                this.servicio = data;
                this.imgServicio = data.img;
            });
        }
    }

    regresar(){
        window.history.back();
    }

    onSubmit(): void {
        if(this.servicioForm.invalid){
            this.servicioForm.markAllAsTouched();
        }
    
        if(this.id){
            //Editar
            this.notifier.notify('success', 'Editado Correctamente');
        }else{
            //Crear  
            this.notifier.notify('success', 'Creado Correctamente');  

        }


        
        // Process checkout data here
        // this.products = this.cartService.clearCart();
        // this.checkoutForm.reset();
    }
}
