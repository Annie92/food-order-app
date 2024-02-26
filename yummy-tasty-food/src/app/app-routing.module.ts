import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './features/contactus/contactus.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home',  loadChildren: () => import('./features/homepage/homepage.module').then(m => m.HomepageModule)  },
  { path: 'menu', loadChildren: () => import('./features/menu/menu.module').then(m => m.MenuModule) },
  { path: 'order', loadChildren: () => import('./features/order/order.module').then(m => m.OrderModule) },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'cart',   loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) },
  { path: 'restaurants', loadChildren: () => import('./features/restaurant/restaurant.module').then(m => m.RestaurantModule) },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
