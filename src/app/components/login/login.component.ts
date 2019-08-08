import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  loginError: string;
  public togglePassword = 'password';
  public showPasswordIcon;
  public hidePasswordIcon;


  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    // redirect to home if the user is already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.showPasswordIcon = false;
    this.hidePasswordIcon = true;
    this.togglePassword = 'password';

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // conveniently get the values from the form fields
  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if the form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.form.username.value, this.form.password.value)
    .pipe(first())
    .subscribe(user => {
      this.router.navigate(['/']);
      this.authService.setLoggedIn(true);
      sessionStorage.setItem('id', user.user_id);
    },
    error => {
      this.loginError = 'Username or Password is Incorrect';
      this.loading = false;
      console.error(error);
    });
  }

  // Password Toggle Functions
  showPassword() {
    this.showPasswordIcon = true;
    this.hidePasswordIcon = false;
    this.togglePassword = 'text';
  }

  hidePassword() {
    this.showPasswordIcon = false;
    this.hidePasswordIcon = true;
    this.togglePassword = 'password';
  }
}
