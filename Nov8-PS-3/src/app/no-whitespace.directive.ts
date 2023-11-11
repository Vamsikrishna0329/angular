import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoWhitespace]'
})
export class NoWhitespaceDirective {
  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value.replace(/\s/g, ''); // Remove whitespaces
    inputElement.value = inputValue;
  }
}
