export class SimpleCalculationDto {
    leftHand: number;
    rightHand: number;
    operator: string;

    constructor(leftHand: number, rightHand: number, operator: string) {
        this.leftHand = leftHand
        this.rightHand = rightHand
        this.operator = operator
    }
}