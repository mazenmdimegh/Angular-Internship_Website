import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private authService:AuthService) { }
  registrationForm= this.fb.group({
    nom:[''],
    prenom:[''],
    email:[''],
    tel:['']
  })
  ngOnInit(): void {
  }
  sub(){
    console.log(this.registrationForm.value)
    this.authService.AddStudent(this.registrationForm.value)
    .subscribe(data=>{
      console.log("success")
    })
  }

}
