import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../exchange-rate.service';


@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  title = 'angular-currency-app';
  clickCounter = 0;

  amount = 1;
   from = 'USD';
   to = 'INR';

   conversion_rates: {[key: string]: number};

   increment(){
    this.clickCounter++;
  }

  convert(): number {
  return this.amount * this.conversion_rates[this.to];
  }

  loadRates(){
    this.service.getRates(this.from).subscribe(res => this.conversion_rates = res.conversion_rates);
      // console.log(res));;

  }

  getAllCurrencies(): string []{
    return Object.keys(this.conversion_rates);
  }
  constructor(private service: ExchangeRateService) {
    // this.service.getRates(this.from).subscribe(res =>
    //   console.log(res));
   }

  ngOnInit(): void {
this.loadRates();
  }



}
