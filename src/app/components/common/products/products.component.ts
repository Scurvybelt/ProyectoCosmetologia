import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NotifierService } from 'angular-notifier';
import { CartService } from '../../../cart.service';
import { ModalService } from '../../../modal.service';
import { HttpClient } from "@angular/common/http";
import { Product } from 'src/app/product';
import { Router } from '@angular/router';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    modalRef?: BsModalRef;
    modalProduct = this.modalViewService.getProduct();
    private readonly notifier: NotifierService;

    constructor(
        public router: Router,
        private modalService: BsModalService,
        notifierService: NotifierService,
        private cartService: CartService,
        private httpClient: HttpClient,
        private modalViewService: ModalService
    ) {
        this.notifier = notifierService;
    }

    products: any = [];

    ngOnInit(){
        this.httpClient.get("assets/data/products.json").subscribe(data =>{
            this.products = data;
        });
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
        this.notifier.notify('success', 'Your product added to the cart!');
    }

    addToModal(product: Product) {
        this.modalViewService.addToModal(product);
    }
    
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(
            template,
            Object.assign({}, { class: 'product-quickview-modal' })
        );
    }

}