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
  const OPERATION: string = 'ADD';
  const SIMPLE_CALCULATION_DTO: SimpleCalculationDto = new SimpleCalculationDto(1, 2, OPERATION);

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
      
      spyOn(mockApiDataService, 'postSimpleCalculationDtos').and.returnValue(
        of([SIMPLE_CALCULATION_RESULT])
      );

      let calculationList: SimpleCalculationDto[] = [SIMPLE_CALCULATION_DTO];
      app.calculationDtoList = [SIMPLE_CALCULATION_DTO];

      app.retrieveCalculationResults();

      expect(mockApiDataService.postSimpleCalculationDtos)
      .toHaveBeenCalledWith(calculationList);
    });


    it('should set the results', () => {
      const fixture = TestBed.createComponent(SimpleCalculatorAppComponent);
      const app = fixture.componentInstance;
      
      let resultList: SimpleCalculationResult[] = [SIMPLE_CALCULATION_RESULT];

      spyOn(mockApiDataService, 'postSimpleCalculationDtos').and.returnValue(
        of(resultList)
      );

      let calculationList: SimpleCalculationDto[] = [SIMPLE_CALCULATION_DTO];
      app.calculationDtoList = [SIMPLE_CALCULATION_DTO];

      app.retrieveCalculationResults();

      expect(app.results).toEqual(resultList);
    });
  });
});

