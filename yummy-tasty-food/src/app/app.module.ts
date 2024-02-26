import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './features/navigation/navigation.module';
import { HomepageModule } from './features/homepage/homepage.module';
import { InputPhoneFormatDirective } from './shared/directives/input-phone-format.directive';
import { ContactusComponent } from './features/contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    InputPhoneFormatDirective,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NavigationModule,
    HomepageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
