import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { FormGroup, FormBuilder} from '@angular/forms';

import {RadioOption} from '../shared/radio/radio-option.model';

import {OrderService} from './order.service';
import {CartItem} from '../restaurants-detail/shooping-cart/cart-item.model';

import {Order,OrderItem} from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  paymentsOptions:RadioOption[] = [
    {label:'Dinheriro',value:'MON'},
    {label:'Cartão de Débito',value:'DEB'},
    {label:'Cartão Refeição',value:'REF'},
  ];

  delivery:number = 8;

  constructor(private orderService:OrderService,
              private router:Router,
            private formBuilder:FormBuilder) { }

  ngOnInit() {
    
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      emailConfirmation: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      optionalAdress:this.formBuilder.control(''),
      paymentsOptions: this.formBuilder.control('')
    });

  }

  itemsValue():number {
    return this.orderService.itemsValue();
  }
  cartItems(){
    return this.orderService.cartItem();
  }

  increase(item:CartItem) {
    this.orderService.increaseQty(item);
  }

  decrease(item:CartItem){
    this.orderService.decreaseQty(item);
  }

  remove(item:CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order:Order){
    order.orderItens = this.cartItems()
                            .map( (item:CartItem) => new OrderItem(item.quantity,item.menuItem.id));
    this.orderService.checkOrder(order)
                      .subscribe( (orderItem:string) => {

                        this.router.navigate(['/order-summary']);
                          console.log(orderItem);

                          this.orderService.clear();
                      });

  }
}
