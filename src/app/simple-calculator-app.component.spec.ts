import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SimpleCalculatorAppComponent } from './simple-calculator-app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SimpleCalculatorAppComponent
      ],
    }).compileComponents();
  });
});
