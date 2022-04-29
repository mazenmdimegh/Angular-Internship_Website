import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-entrepreneur',
  templateUrl: './form-entrepreneur.component.html',
  styleUrls: ['./form-entrepreneur.component.css']
})
export class FormEntrepreneurComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    societe: null,
    ncin: null,
    tel: null,
    gouvernorat: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  public societee = false;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
  registrationForm = this.fb.group({
    nom: [''],
    prenom: [''],
    email: [''],
    password: [''],
    ncin: [''],
    tel: [''],
    adress: [''],
    secondadress: [''],
    city: [''],
    societe: [''],
    zip: []
  })
  ngOnInit(): void {
  }
  onChange(deviceValue) {
    console.log(deviceValue);
    if (deviceValue == "Autre") {
      this.societee = true
    } else {
      this.societee = false;
    }
  }
  onSubmit(): void {
    // const { username, email, password , societe, ncin, tel, gouvernorat} = this.form;
    //  console.log(username, email, password , societe,  ncin, tel, gouvernorat);

    // this.authService.registerE(username, email, password , societe, ncin, tel, gouvernorat).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //     this.router.navigate(['login']);
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
  }
  sub() {
    const { username, email, password, societe, ncin, tel, gouvernorat } = this.form;
    console.log(username, email, password, societe, ncin, tel, gouvernorat);

    this.authService.registerE(username, email, password, ncin, tel, gouvernorat, societe).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['login']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}