import { Component } from '@angular/core';
import { Country } from '../interface/country';
import { CountryService } from '../service/country.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'country-home',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './country-home.component.html',
  styleUrls: ['./country-home.component.css']
})
export class CountryHomeComponent {
  searchText: string = '';
  countries: Country[] = [];
  filteredCountries: Country[] = [];
  title = 'country-details';
  isLoading: boolean=true;
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
    if (this.searchText.trim() === '') {
      this.filteredCountries = this.countries;
      this.isLoading = false;
    } else {
      this.filteredCountries = this.countries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );
    }
  }
}
