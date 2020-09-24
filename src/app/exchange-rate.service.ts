import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRatedata } from './exchange-ratedata';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {


 // url = 'https://v6.exchangerate-api.com/v6/7ac07a4e2af4b65dc6d000dc/latest/USD';
  constructor( private http: HttpClient) { }

  getRates(): Observable<ExchangeRatedata>{
    return this.http.get<ExchangeRatedata>('https://v6.exchangerate-api.com/v6/7ac07a4e2af4b65dc6d000dc/latest/USD');
  }
}
