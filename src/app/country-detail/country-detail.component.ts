import { Component, OnInit } from '@angular/core';
import { Country } from '../interface/country';
import { CountryService } from '../service/country.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'country-detail',
  standalone: true,
  imports: [],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.css',
  providers: [CountryService, CommonModule],
})
export class CountryDetailComponent implements OnInit {
  countryDetails: Country[] = [];
  isLoading: boolean = true; // Variable to track loading state

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loading();
    this.onAssignParams();
  }
  onAssignParams(): void {
    this.route.params.subscribe((params) => {
      const cca2Code = params['cca2'];

      if (cca2Code) {
        this.loadCountryDetails(cca2Code);
      }
    });
  }
  loadCountryDetails(cca2: string) {
    this.countryService.getCountryByCode(cca2).subscribe({
      next: (data: Country) => {
        if (Array.isArray(data)) {
          if (data.length > 0) {
            this.countryDetails = data;
            // console.log('Country Details:', this.countryDetails);
          }
        } else {
          // Handle the case where a single Country is returned
          this.countryDetails = [data];
          // console.log('Country Details:', this.countryDetails);
        }
      },
      error: (error: any) => console.log(error),
      complete: () => console.log('Done Retrieving country details'),
    });
  }
  loading(): void {
    setTimeout(() => {
      this.isLoading = false; // Set isLoading to false when data is loaded
    }, 2000);
  }
}
