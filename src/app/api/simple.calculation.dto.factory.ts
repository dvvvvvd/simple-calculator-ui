import { SimpleCalculationDto } from './simple.calculation.dto'

export class SimpleCalculationDtoFactory {

    public create(formControlInput: any, operator: string) {
        const leftHandNumber: number = parseInt(formControlInput["leftHandInput"])
        const rightHandNumber: number = parseInt(formControlInput["rightHandInput"])

        return new SimpleCalculationDto(leftHandNumber, rightHandNumber, operator);
    }
}