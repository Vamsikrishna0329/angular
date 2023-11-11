import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadonlyDirective } from './readonly.directive';
import { FormsModule } from '@angular/forms';
import { NoWhitespaceDirective } from './no-whitespace.directive';
import { NumbersOnlyDirective } from './numbers-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReadonlyDirective,
    NoWhitespaceDirective,
    NumbersOnlyDirective
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
