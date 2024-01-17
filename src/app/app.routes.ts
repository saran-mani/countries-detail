import { Routes } from '@angular/router';
import { CountryHomeComponent } from './country-home/country-home.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { FourNotFourComponent } from './four-not-four/four-not-four.component';

export const routes: Routes = [
    {path:'',component:CountryHomeComponent},
    {path:'country/:cca3',component:CountryDetailComponent},
    {path:'**',component:FourNotFourComponent}
];
