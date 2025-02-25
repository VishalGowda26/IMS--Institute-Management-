import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$'
      ),
    ]),
  });

  /** Check if form control has an error */
  getErrorMessage(field: string): string {
    const control = this.loginForm.get(field);
    if (control?.hasError('required')) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    }
    if (control?.hasError('email')) {
      return `Please enter a valid email address.`;
    }
    if (control?.hasError('pattern')) {
      return `Password must be at least 8 characters long and include:
        - One uppercase letter
        - One lowercase letter
        - One number
        - One special character (@$!%*?&)`;
    }
    return '';
  }

  showPassword: boolean = false; // Password visibility toggle

  /** Toggle Password Visibility */
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);
    } else {
      console.log('Form Invalid');
    }
  }

  constructor(private _loginService: LoginService, private _router: Router) {}

  token: string = '';

  login() {
    this._loginService.login(this.loginForm.value).subscribe(
      (data: any) => {
        this.token = data.token;
        sessionStorage.setItem('token', this.token);
        alert('login Successful!');
        this._router.navigateByUrl('/dashboard')
        console.log(this.token);
      },
      (err: any) => {
        alert('Invalid Credentials!');
      }
    );
  }
}
