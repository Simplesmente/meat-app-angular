import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';

import {ShoppingCartService} from './shooping-cart.service';

@Component({
  selector: 'mt-shooping-cart',
  templateUrl: './shooping-cart.component.html',
   animations:[
    trigger('row', [
      state('ready', style({opacity:1}) ),
      transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({opacity:0, transform:'translateX(-30px)', offset:0}),
        style({opacity:0.8, transform:'translateX(-10px)', offset:0.8}),
        style({opacity:1, transform:'translateX(0px)', offset:1}),
      ]))),
      transition('ready => void', animate('300ms 0s ease-out', keyframes([
        style({opacity:1, transform:'translateX(0px)', offset:0}),
        style({opacity:0.8, transform:'translateX(-10px)', offset:0.2}),
        style({opacity:0, transform:'translateX(30px)', offset:1}),
      ]))),
      
      
    ])
  ]
})
export class ShoopingCartComponent implements OnInit {

  rowState = 'ready';

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
