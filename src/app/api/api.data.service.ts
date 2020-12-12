import { observable, Observable } from 'rxjs';
import { environment } from "../../environments/environment"
import { SimpleCalculationResult } from '../model/simple.calculation.result';
import { SimpleCalculationDto } from "./simple.calculation.dto"
import { HttpClient } from "@angular/common/http"
import {Injectable} from "@angular/core"
import { of } from 'rxjs';

@Injectable()
export class ApiDataService {
    private readonly serverUrl: string = environment.apiUrl;
    private readonly calculationContextPath: string = "/my-simple-calculator/calculation";

    constructor(private readonly httpClient: HttpClient) {

    }

    public postSimpleCalculationDtos(dtos: SimpleCalculationDto[]): Observable<SimpleCalculationResult[]> {
        let url = this.serverUrl + this.calculationContextPath;
        return this.httpClient.post<SimpleCalculationResult[]>(url, dtos, {})
    }
}