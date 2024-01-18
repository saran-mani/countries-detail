import { Component } from '@angular/core';
import { Country } from '../interface/country';
import { CountryService } from '../service/country.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'country-home',
  standalone: true,
  imports: [FormsModule,RouterModule,NgSelectModule,ReactiveFormsModule],
  templateUrl: './country-home.component.html',
  styleUrls: ['./country-home.component.css']
})
export class CountryHomeComponent {
  countries: Country[] = [];
  filteredCountries: Country[] = [];
  title = 'country-details';
  isLoading: boolean=true;
  selectedCountry: any;
  constructor(private countryService: CountryService) {}
  ngOnInit(): void {
    // this.loading()
    this.onGetAllCountry();
  }
  onGetAllCountry(): void {
    this.countryService.getAllCountries().subscribe({
      next: (response) => {
        this.countries = response;
      this.isLoading = false; // Set isLoading to false when data is loaded

        this.filteredCountries = response;
      },
      error: (error) => console.log(error),
      complete: () => console.log('Done retriving data'),
    });
  }

  search() {
    if (this.selectedCountry) {
      this.filteredCountries = this.countries.filter((country) =>
        country.name.common.toLowerCase() === this.selectedCountry.toLowerCase()
      );
    } else {
      // Handle the case when no country is selected
      this.filteredCountries = this.countries;
    }
  }
  
}
