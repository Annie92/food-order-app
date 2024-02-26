import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu.routing.module';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { FavouriteComponent } from '../../shared/favourite/favourite.component';



@NgModule({
  declarations: [
    MenuListComponent,
    MenuCardComponent,
    FavouriteComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  exports: [
    MenuListComponent,
    MenuCardComponent,
  ]
})
export class MenuModule { }
