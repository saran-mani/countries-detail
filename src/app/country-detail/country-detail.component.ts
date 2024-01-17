import { Component, OnInit } from '@angular/core';
import { Country } from '../interface/country';
import { CountryService } from '../service/country.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'country-detail',
  standalone: true,
  imports: [ CommonModule,RouterModule],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.css',
  providers: [CountryService,],
})
export class CountryDetailComponent implements OnInit {

  countryDetails: Country[] = [];
  isLoading: boolean = true; // Variable to track loading state
  googleMapsLink = 'https://www.google.com/maps/place/';
country: any;
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
      const cca3Code = params['cca3'];

      if (cca3Code) {
        this.loadCountryDetails(cca3Code);
      }
    });
  }
  loadCountryDetails(cca3: string) {
    this.countryService.getCountryByCode(cca3).subscribe({
      next: (data: Country[]) => {
        if (Array.isArray(data)) {
          if (data.length > 0) {
            this.countryDetails = data;
            console.log(this.countryDetails);
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
  scroll(arg0: number,arg1: number) {
    window.scroll(arg0,arg1)
  }
  loading(): void {
    setTimeout(() => {
      this.isLoading = false; // Set isLoading to false when data is loaded
    }, 1000);
  }
}
