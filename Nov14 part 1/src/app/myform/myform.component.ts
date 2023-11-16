import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})


export class MyformComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      dob: ['', [Validators.required, this.validateDate]],
      doj: ['', [Validators.required, this.validateDate]],
    }, { validators: this.dateDifferenceValidator });
  }

  validateDate(control: { value: string | number | Date; }) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    if (selectedDate > currentDate) {
      return { futureDate: true };
    }

    return null;
  }

  dateDifferenceValidator(formGroup: FormGroup) {
    const dob = formGroup.get('dob')!.value;
    const doj = formGroup.get('doj')!.value;

    if (dob && doj) {
      const diffInYears = Math.abs(doj.getFullYear() - dob.getFullYear());

      if (diffInYears !== 20) {
        formGroup.get('doj')!.setErrors({ invalidDifference: true });
      } else {
        formGroup.get('doj')!.setErrors(null);
      }
    }
  }

  submitForm() {
    if (this.myForm.valid) {
      // Your form is valid, proceed with submission
      console.log(this.myForm.value);
    } else {
      // Handle validation errors
      console.log("Form is invalid");
    }
  }
}