import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversePipe } from './reverse.pipe';
import { TemperatureConversionPipe } from './temperature-conversion.pipe';
import { FormsModule } from '@angular/forms';
import { SortCountriesPipe } from './sort-countries.pipe';
import { CountriesComponent } from './countries/countries.component';
import { CountriesService } from './countries.service';


@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    TemperatureConversionPipe,
    SortCountriesPipe,
    CountriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers:[CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
