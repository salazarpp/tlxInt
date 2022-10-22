import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataCountryComponent } from './data-country/data-country.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'population', component: DataCountryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
