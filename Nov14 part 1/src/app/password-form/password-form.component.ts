


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent implements OnInit {
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit() {
    // Other initialization logic if needed
    if (this.passwordForm.valid) {
      console.log('Password matches!');
    } else {
      console.log('Password incorrect.');
    }
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')!.value === g.get('confirmPassword')!.value
      ? null : { 'mismatch': true };
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      console.log('Password matches!');
    } else {
      console.log('Password incorrect.');
    }
  }
}
