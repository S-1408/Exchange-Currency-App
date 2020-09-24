import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: 'currency-converter', component: CurrencyConverterComponent
  },
  {
    path: 'header', component:HeaderComponent
  },
  {
    path:'', redirectTo: '/header' , pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
