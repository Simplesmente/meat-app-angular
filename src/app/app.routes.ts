import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RestaurantesComponent} from './restaurantes/restaurantes.component';
import {RestaurantsDetailComponent} from './restaurants-detail/restaurants-detail.component';
import {MenuComponent} from './restaurants-detail/menu/menu.component';
import {ReviewsComponent} from './restaurants-detail/reviews/reviews.component';
import {OrderComponent} from './order/order.component';
import {OrderSummaryComponent} from './order/order-summary/order-summary.component';
import {NotFoundComponent} from './not-found/not-found.component';

export const ROUTES:Routes = [
    { path:'',component:HomeComponent },
    { path:'about',loadChildren:'./about/about.module#AboutModule' },
    { path:'restaurantes',component:RestaurantesComponent },
    
    { path:'restaurantes/:id',component:RestaurantsDetailComponent,
        children:[
            {path:'', redirectTo: 'menu', pathMatch:'full'},
            {path:'menu', component:MenuComponent},
            {path:'reviews', component:ReviewsComponent},
    ]},
    
    { path:'order',loadChildren:'./order/order.module#OrderModule' },
    { path:'order-summary',component:OrderSummaryComponent },
    {path:'**', component: NotFoundComponent}
];