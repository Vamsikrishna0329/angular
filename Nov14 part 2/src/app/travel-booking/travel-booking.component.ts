
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-travel-booking',
  templateUrl: './travel-booking.component.html',
  styleUrls: ['./travel-booking.component.css']
})
export class TravelBookingComponent {
  travelForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.travelForm = this.fb.group({
      oneWay: [false, Validators.required],
      departureDate: ['', Validators.required],
      returnDate: ['']
    }, { validators: this.dateValidation.bind(this) });
  }

  dateValidation(formGroup: FormGroup) {
    const oneWay = formGroup.get('oneWay')!.value;
    const departureDate = formGroup.get('departureDate')!.value;
    const returnDate = formGroup.get('returnDate')!.value;

    if (!oneWay && !returnDate) {
      return { 'returnDateRequired': true };
    }

    if (!oneWay && returnDate && new Date(returnDate) <= new Date(departureDate)) {
      return { 'invalidReturnDate': true };
    }

    return null;
  }

  onSubmit() {
    // Handle form submission logic
    console.log(this.travelForm.value);
  }
}
