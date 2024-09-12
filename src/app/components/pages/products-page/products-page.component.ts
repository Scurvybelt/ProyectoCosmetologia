import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NotifierService } from 'angular-notifier';
import { CartService } from '../../../cart.service';
import { ModalService } from '../../../modal.service';
import { HttpClient } from "@angular/common/http";
import { Product } from 'src/app/product';

@Component({
    selector: 'app-products-page',
    templateUrl: './products-page.component.html',
    styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

    modalRef?: BsModalRef;
    modalProduct = this.modalViewService.getProduct();
    private readonly notifier: NotifierService;

    constructor(
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

    currentPage : any;
    onPageChange(page: number) {
        this.currentPage = page;
        window.scrollTo(0, 0);
    }

}