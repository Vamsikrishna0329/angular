import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './country.model';

@Pipe({
  name: 'sortCountries',
})
export class SortCountriesPipe implements PipeTransform {
  transform(countries: Country[] | null, order: 'asc' | 'desc'): Country[] | null {
    if (!countries) {
      return null;
    }

    return countries.sort((a, b) =>
      order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
  }
}

