import { Routes } from '@angular/router';
import { CountryHomeComponent } from './country-home/country-home.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

export const routes: Routes = [
    {path:'',component:CountryHomeComponent},
    {path:'country/:cca2',component:CountryDetailComponent}
];
