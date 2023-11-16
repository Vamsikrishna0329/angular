import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TravelBookingComponent } from './travel-booking/travel-booking.component';
import { SmartphoneDropdownsComponent } from './smartphone-dropdowns/smartphone-dropdowns.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelBookingComponent,
    SmartphoneDropdownsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
