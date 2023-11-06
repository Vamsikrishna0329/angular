import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { AppColorChangerComponent } from './app-color-changer/app-color-changer.component';
import { FontResizerComponent } from './font-resizer/font-resizer.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    AppColorChangerComponent,
    FontResizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
