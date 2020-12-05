import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SimpleCalculatorAppRoutingModule } from './simple-calculator-app-routing.module';
import { SimpleCalculatorAppComponent } from './simple-calculator-app.component';

@NgModule({
  declarations: [
    SimpleCalculatorAppComponent
  ],
  imports: [
    BrowserModule,
    SimpleCalculatorAppRoutingModule
  ],
  providers: [],
  bootstrap: [SimpleCalculatorAppComponent]
})
export class AppModule { }
