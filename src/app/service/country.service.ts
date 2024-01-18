import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Country } from '../interface/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`https://restcountries.com/v3.1/all`).pipe(
      map((data) =>
        data.map((country) => ({
          name: {
            common: country.name.common,
            official: country.name.official,
          },
          capital: country.capital,
          region: country.region,
          subregion: country.subregion,
          population: country.population,
          latlng: country.latlng,
          area: country.area,
          borders: country.borders,
          maps: {
            googleMaps: country.maps.googleMaps,
          },
          languages: country.languages,
          demonyms: country.demonyms,
          flags: {
            png: country.flags.png,
          },
          cca3: country.cca3.toLowerCase(),
        }))
      ),
      map((countries) => this.alphabetizeCountries(countries))
    );
  }
  getCountryByCode(cca3: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`https://restcountries.com/v3.1/alpha/${cca3}`)
      .pipe(
        map((data) =>
          data.map((country) => ({
            name: {
              common: country.name.common,
              official: country.name.official,
            },
            capital: country.capital,
            region: country.region,
            subregion: country.subregion,
            population: country.population,
            latlng: country.latlng,
            area: country.area,
            borders: country.borders,
            maps: {
              googleMaps: country.maps.googleMaps,
            },
            languages: country.languages,
            demonyms: country.demonyms,
            flags: {
              png: country.flags.png,
            },
            cca3: country.cca3.toLowerCase(),
          }))
        ),
        map((countries) => this.alphabetizeCountries(countries))
      );
  }
  private alphabetizeCountries(countries: Country[]): Country[] {
    return countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  }
}
