import { Component, OnInit } from '@angular/core';

import {ShoppingCartService} from './shooping-cart.service';

@Component({
  selector: 'mt-shooping-cart',
  templateUrl: './shooping-cart.component.html'
})
export class ShoopingCartComponent implements OnInit {

  constructor(private shoopingService:ShoppingCartService) { }

  ngOnInit() {
  }

  total():number {
    return this.shoopingService.total();
  }

  items():any[] {
    return this.shoopingService.items;
  }

  clear(){
    this.shoopingService.clear();
  }

  removeMenuItem(item:any) {
    this.shoopingService.removeItem(item);
  }

   addMenuItem(item:any) {
    this.shoopingService.addItem(item);
  }
}
