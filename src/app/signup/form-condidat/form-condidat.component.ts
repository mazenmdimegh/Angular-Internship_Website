import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-condidat',
  templateUrl: './form-condidat.component.html',
  styleUrls: ['./form-condidat.component.css']
})
export class FormCondidatComponent  {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService:AuthService,private router: Router) { }

  
  onSubmit(): void {
    // const { username, email, password , faculte, promotion, ncin, tel, governorat} = this.form;
    //  console.log(username, email, password , faculte, promotion, ncin, tel, governorat);
    // this.authService.register(username, email, password , faculte, promotion, ncin, tel, governorat).subscribe(
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
  sub(){
    const { username, email, password , faculte, promotion, ncin, tel, gouvernorat} = this.form;
    this.authService.registerC(username, email, password , faculte, promotion, ncin, tel, gouvernorat).subscribe(
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
    // this.authService.AddStudent(this.registrationForm.value)
    // .subscribe(data=>{
    //   console.log("success")
    // })
  }

}