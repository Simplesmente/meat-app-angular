import {Injectable} from '@angular/core';

import {ShoppingCartService} from '../restaurants-detail/shooping-cart/shooping-cart.service';
import {CartItem} from '../restaurants-detail/shooping-cart/cart-item.model';

import {Order} from './order.model';

import {Http,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {MEAT_API} from '../app.api';

@Injectable()
export class OrderService{
    
    constructor(private cartService:ShoppingCartService,
                private http:Http){}

    cartItem():CartItem[]{
        return this.cartService.items;
    }

    increaseQty(item:CartItem){
        this.cartService.increaseQty(item);
    }

    decreaseQty(item:CartItem){
        this.cartService.decreaseQty(item);
    }

    remove(item:CartItem){
        this.cartService.removeItem(item);
    }

    itemsValue():number{
        return this.cartService.total();
    }

    checkOrder(order:Order):Observable<string>{
        const headers = new Headers();
        headers.append('Content-type','Application/json');

        return this.http.post(`${MEAT_API}/orders`,JSON.stringify(order),
                                                    new RequestOptions({headers:headers}))
                                                    .map(response => response.json())
                                                    .map(order => order.id);
    }                                                

    clear(){
        this.cartService.clear();
    }
} 