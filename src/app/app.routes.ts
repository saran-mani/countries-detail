import { Routes } from '@angular/router';
import { CountryHomeComponent } from './country-home/country-home.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { FourNotFourComponent } from './four-not-four/four-not-four.component';
import { DeveloperGuideComponent } from './developer-guide/developer-guide.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'',component:CountryHomeComponent},
    {path:'country/:cca3',component:CountryDetailComponent},
    {path:'guide',component:DeveloperGuideComponent},
    {path:'about',component:AboutComponent},
    {path:'**',component:FourNotFourComponent}
];
