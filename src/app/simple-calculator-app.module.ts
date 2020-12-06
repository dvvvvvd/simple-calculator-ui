import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SimpleCalculatorAppRoutingModule } from './simple-calculator-app-routing.module';
import { SimpleCalculatorAppComponent } from './simple-calculator-app.component';
import { HttpClientModule } from "@angular/common/http"
import { ApiDataService } from './api/api.data.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SimpleCalculationDtoFactory } from './api/simple.calculation.dto.factory'

@NgModule({
  declarations: [
    SimpleCalculatorAppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SimpleCalculatorAppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiDataService,
    SimpleCalculationDtoFactory
  ],
  bootstrap: [SimpleCalculatorAppComponent]
})
export class AppModule { }
