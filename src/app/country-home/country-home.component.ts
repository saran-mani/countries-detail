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
  styleUrl: './country-home.component.css'
})
export class CountryHomeComponent {
  searchText: string = '';
  countries: Country[] = [];
  filteredCountries: Country[] = [];
  title = 'country-details';
  constructor(private countryService: CountryService) {}
  ngOnInit(): void {
    this.onGetAllCountry();
  }
  onGetAllCountry(): void {
    this.countryService.getAllCountries().subscribe({
      next: (response) => {
        this.countries = response;
        this.filteredCountries = response;
      },
      error: (error) => console.log(error),
      complete: () => console.log('Done retriving data'),
    });
  }

  search() {
    if (this.searchText.trim() === '') {
      this.filteredCountries = this.countries; // Reset to all countries if search is empty
    } else {
      // Filter countries based on the search text
      this.filteredCountries = this.countries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );
    }
  }
}
