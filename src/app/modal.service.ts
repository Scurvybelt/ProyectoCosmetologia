import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    product: Product[] = [];

    constructor() {}

    addToModal(product: Product) {
        this.product[0] = product;
    }

    getProduct() {
        return this.product;
    }
}