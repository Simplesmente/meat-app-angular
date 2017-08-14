import {NgModule} from '@angular/core';

import {OrderService} from '../order/order.service';
import {ShoppingCartService} from '../restaurants-detail/shooping-cart/shooping-cart.service';
import {RestaurantesService} from '../restaurantes/restaurantes.service';

@NgModule({
    providers:[ShoppingCartService,RestaurantesService,OrderService]
})

export class CoreModule {}