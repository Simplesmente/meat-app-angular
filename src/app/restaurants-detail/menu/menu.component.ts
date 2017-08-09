import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RestaurantesService} from '../../restaurantes/restaurantes.service';

import {Observable} from 'rxjs/Observable';

import {MenuItem} from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;


  constructor(private restaurantesService:RestaurantesService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantesService.menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item:MenuItem) {
    console.log(item);
  }

}
