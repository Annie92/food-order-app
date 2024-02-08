import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    NavigationModule
  ],
  exports: [ 
    HomepageComponent
  ]
})
export class HomepageModule { }
