




// temperature-conversion.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConversion'
})
export class TemperatureConversionPipe implements PipeTransform {
  transform(value: number, toUnit: 'C' | 'F'): number {
    if (isNaN(value)) {
      return value;
    }

    if (toUnit === 'C') {
      // Fahrenheit to Celsius conversion: (F - 32) * 5/9
      return (value - 32) * 5 / 9;
    } else if (toUnit === 'F') {
      // Celsius to Fahrenheit conversion: (C * 9/5) + 32
      return (value * 9 / 5) + 32;
    }

    return value;
  }
}
