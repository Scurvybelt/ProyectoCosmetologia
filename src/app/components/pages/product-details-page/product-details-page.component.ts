import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';
import { CartService } from '../../../cart.service';
import { Product } from 'src/app/product';

@Component({
    selector: 'app-product-details-page',
    templateUrl: './product-details-page.component.html',
    styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

    private readonly notifier: NotifierService;
    public slug: any;
    public data: any;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private cartService: CartService,
        notifierService: NotifierService
    ) {
        this.route.params.subscribe((param: any) => {
            this.getJSON().subscribe((products) => {
                this.data = products.find(
                    (product: any) => product.slug === param.slug
                );
            });
        });
        this.notifier = notifierService;
    }

    public getJSON(): Observable<any> {
        return this.http.get('assets/data/products.json');
    }

    ngOnInit() {}

    addToCart(product: Product, quantity: number) {
        this.cartService.addToCart(product, quantity);
        this.notifier.notify('success', 'Your product added to the cart!');
    }

    counter(i: number) {
        return new Array(i);
    }

    // Input Counter
    inputnumber = 1;
    plus() {
        this.inputnumber = this.inputnumber + 1;
    }
    minus() {
        this.inputnumber != 1;
        {
            this.inputnumber = this.inputnumber - 1;
        }
    }

}