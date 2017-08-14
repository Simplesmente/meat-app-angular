import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from './shared/shared.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import {ROUTES} from './app.routes';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestaurantComponent } from './restaurantes/restaurant/restaurant.component';
// import {RestaurantesService} from './restaurantes/restaurantes.service';
import { RestaurantsDetailComponent } from './restaurants-detail/restaurants-detail.component';
import { MenuComponent } from './restaurants-detail/menu/menu.component';
import { ShoopingCartComponent } from './restaurants-detail/shooping-cart/shooping-cart.component';
import { MenuItemComponent } from './restaurants-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurants-detail/reviews/reviews.component';
// import {ShoppingCartService} from './restaurants-detail/shooping-cart/shooping-cart.service';

// import { OrderService } from './order/order.service';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantesComponent,
    RestaurantComponent,
    RestaurantsDetailComponent,
    MenuComponent,
    ShoopingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES,{preloadingStrategy:PreloadAllModules}),
    FormsModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
    CoreModule
  ],
  providers: [{provide:LOCALE_ID,useValue:'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
