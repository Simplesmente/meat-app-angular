import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { FormGroup, FormBuilder, Validators,AbstractControl} from '@angular/forms';

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

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  numberPattern = /^[0-9]*$/;

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
      name: this.formBuilder.control('',[Validators.required,Validators.minLength(5)]),
      email: this.formBuilder.control('',[Validators.required,Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('',[Validators.required,Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('',[Validators.required,Validators.minLength(5)]),
      number: this.formBuilder.control('',[Validators.required,Validators.pattern(this.numberPattern)]),
      optionalAddress:this.formBuilder.control(''),
      paymentsOptions: this.formBuilder.control('',[Validators.required])
    },{validator: OrderComponent.equalsTo});

  }

  static equalsTo(group:AbstractControl): {[key:string]:boolean}
  {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');

    if(!email || !emailConfirmation){
        return undefined;
    }

    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true};
    }

    return undefined;

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
