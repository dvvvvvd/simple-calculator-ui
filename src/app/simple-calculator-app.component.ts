import { Component } from '@angular/core';
import { ApiDataService } from "./api/api.data.service"
import { SimpleCalculationDto } from './api/simple.calculation.dto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SimpleCalculationDtoFactory } from './api/simple.calculation.dto.factory'
import { ValidatorRegex} from "./properties/validator-enum"
import { SimpleCalculationResult } from './model/simple.calculation.result';

@Component({
  selector: 'app-root',
  templateUrl: './simple-calculator-app.component.html',
  styleUrls: ['./simple-calculator-app.component.scss']
})
export class SimpleCalculatorAppComponent {

  public calculationInputForm: FormGroup
  public results: SimpleCalculationResult[];
  public calculationDtoList: SimpleCalculationDto[]
  public errorMessage: string;


  title = 'simple-calculator-ui';

  constructor(
    private apiDataService: ApiDataService,
    private simpleCalculationDtoFactory: SimpleCalculationDtoFactory) {
    this.results = [];

    this.calculationDtoList = [];

    this.errorMessage = '';

    this.calculationInputForm = new FormGroup({
      leftHandInput: new FormControl('', [ Validators.required, Validators.pattern(ValidatorRegex.Integer)]),
      rightHandInput: new FormControl('', [ Validators.required, Validators.pattern(ValidatorRegex.Integer)]),
    });
  }

  public addCalculation(operation: string) {
    const dto: SimpleCalculationDto = this.simpleCalculationDtoFactory.create(this.calculationInputForm.value, operation);
    this.calculationDtoList.push(dto);

    this.calculationInputForm.controls['leftHandInput'].setValue('');
    this.calculationInputForm.controls['rightHandInput'].setValue('');
  } 

  public reset() {
    this.calculationInputForm.controls['leftHandInput'].setValue('');
    this.calculationInputForm.controls['rightHandInput'].setValue('');

    this.calculationDtoList = [];
    this.results = [];
    this.errorMessage = '';
  } 

  public retrieveCalculationResults() {
    this.apiDataService.postSimpleCalculationDtos(this.calculationDtoList).subscribe(
      res => {
         this.results = res;
         this.errorMessage = '';
      },
      err => {
         this.errorMessage = err.error;
      });
  } 
}
