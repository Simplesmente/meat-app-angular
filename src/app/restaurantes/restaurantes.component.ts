import { Component, OnInit } from '@angular/core';
import {Restaurant} from './restaurant/restaurant.model';
import {RestaurantesService} from './restaurantes.service';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html'
})

export class RestaurantesComponent implements OnInit {

  restaurants: Array<Restaurant> = [];
  
  constructor(private restaurantesService:RestaurantesService) { 
   
  }

  ngOnInit() {
    this.restaurantesService
                .restaurants()
                  .subscribe(restaurants => this.restaurants = restaurants);
  }

}
