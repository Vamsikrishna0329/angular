


import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginMessage: string = '';
  loginAttempts: number = 0;
  isLoginDisabled: boolean = false;

  onSubmit() {
    if (this.loginAttempts >= 2) {
      this.isLoginDisabled = true;
    }
    if (this.username === 'vamsi' && this.password === 'vamsi') {
      this.loginMessage = 'Login successful';
    } else {
      this.loginAttempts++;
      this.loginMessage = 'Invalid credentials';

      
      if (this.loginAttempts >= 3) {
        this.isLoginDisabled = true;
      }
    }
  }
}
