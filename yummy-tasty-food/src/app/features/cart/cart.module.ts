import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { MenuModule } from '../menu/menu.module';
import { CartRoutingModule } from './cart.routing.module';

@NgModule({
  declarations: [
    CartListComponent
  ],
  imports: [
    CartRoutingModule,
    CommonModule,
    MenuModule,
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
