import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {RestaurantesService} from '../restaurantes/restaurantes.service';
import {Restaurant} from '../restaurantes/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants-detail',
  templateUrl: './restaurants-detail.component.html'
})
export class RestaurantsDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantesService:RestaurantesService, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.restaurantesService.restaurantById(this.route.snapshot.params['id'])
                                     .subscribe( res => this.restaurant = res );
                                     
  }

}
