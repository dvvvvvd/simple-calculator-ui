import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './simple-calculator-app.component.html',
  styleUrls: ['./simple-calculator-app.component.scss']
})
export class SimpleCalculatorAppComponent {
  public result: Number;

  title = 'simple-calculator-ui';

  constructor() {
    this.result = 0;
  }
}
