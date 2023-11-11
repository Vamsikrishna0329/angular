// countries.service.ts
import { Injectable } from '@angular/core';
import { Country } from './country.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private countries: Country[] = [];

  getCountries(): Country[] {
    return this.countries;
  }

  addCountry(name: string): void {
    this.countries.push({ name });
  }
}


