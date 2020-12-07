import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiDataService } from './api/api.data.service';
import { SimpleCalculationDto } from './api/simple.calculation.dto';
import { SimpleCalculationDtoFactory } from './api/simple.calculation.dto.factory';
import { SimpleCalculationResult } from './model/simple.calculation.result';
import { SimpleCalculatorAppComponent } from './simple-calculator-app.component';

describe('SimpleCalculatorAppComponent', () => {

  const SIMPLE_CALCULATION_RESULT: SimpleCalculationResult = new SimpleCalculationResult(3);
  const OPERATION: string = 'add';
  const PATH: string = '/add';
  const SIMPLE_CALCULATION_DTO: SimpleCalculationDto = new SimpleCalculationDto(1, 2);

  let mockApiDataService: ApiDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        SimpleCalculatorAppComponent
      ],
      providers: [
        ApiDataService,
        SimpleCalculationDtoFactory
      ]
    }).compileComponents();
    mockApiDataService = TestBed.inject(ApiDataService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SimpleCalculatorAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('retrieveCalculationResult()', () => {

    it('should call ApiDataService', () => {
      const fixture = TestBed.createComponent(SimpleCalculatorAppComponent);
      const app = fixture.componentInstance;
      
      spyOn(mockApiDataService, 'postSimpleCalculationDto').and.returnValue(
        of(SIMPLE_CALCULATION_RESULT)
      );

      app.calculationInputForm.patchValue({
        leftHandInput: '1',
        rightHandInput: '2'
      });

      app.retrieveCalculationResult(OPERATION);

      expect(mockApiDataService.postSimpleCalculationDto)
      .toHaveBeenCalledWith(PATH, SIMPLE_CALCULATION_DTO);
    });


    it('should set the result', () => {
      const fixture = TestBed.createComponent(SimpleCalculatorAppComponent);
      const app = fixture.componentInstance;
      
      spyOn(mockApiDataService, 'postSimpleCalculationDto').and.returnValue(
        of(SIMPLE_CALCULATION_RESULT)
      );

      app.calculationInputForm.patchValue({
        leftHandInput: '1',
        rightHandInput: '2'
      });

      app.retrieveCalculationResult(OPERATION);

      expect(app.result).toBe(3);
    });
  });
});

