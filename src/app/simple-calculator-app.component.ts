import { Component } from '@angular/core';
import { ApiDataService } from "./api/api.data.service"
import { SimpleCalculationDto } from './api/simple.calculation.dto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SimpleCalculationDtoFactory } from './api/simple.calculation.dto.factory'
import { ValidatorRegex} from "./properties/validator-enum"

@Component({
  selector: 'app-root',
  templateUrl: './simple-calculator-app.component.html',
  styleUrls: ['./simple-calculator-app.component.scss']
})
export class SimpleCalculatorAppComponent {

  public calculationInputForm: FormGroup
  public result?: Number;
  public errorMessage: string;

  title = 'simple-calculator-ui';

  constructor(
    private apiDataService: ApiDataService,
    private simpleCalculationDtoFactory: SimpleCalculationDtoFactory) {
    this.result = undefined;
    this.errorMessage = '';
    this.calculationInputForm = new FormGroup({
      leftHandInput: new FormControl('', [ Validators.required, Validators.pattern(ValidatorRegex.Integer)]),
      rightHandInput: new FormControl('', [ Validators.required, Validators.pattern(ValidatorRegex.Integer)]),
    });
  }

  public retrieveCalculationResult(operation: string) {
    const dto: SimpleCalculationDto = this.simpleCalculationDtoFactory.create(this.calculationInputForm.value);
    this.apiDataService.postSimpleCalculationDto("/" + operation, dto).subscribe(
      res => {
         this.result = res.result;
         this.errorMessage = '';
      },
      err => {
         this.errorMessage = err.error;
      });
  } 
}
