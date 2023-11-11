import { Component } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent {
  countries: Country[];
  newCountry: string = '';
  sortOrder: 'asc' | 'desc' = 'asc'; // Default sort order

  constructor(private countriesService: CountriesService) {
    this.countries = countriesService.getCountries();
  }

  addCountry(): void {
    if (this.newCountry.trim() !== '') {
      this.countriesService.addCountry(this.newCountry);
      this.newCountry = ''; // Clear the input after adding
    }
  }

  toggleSortOrder(): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }
}


