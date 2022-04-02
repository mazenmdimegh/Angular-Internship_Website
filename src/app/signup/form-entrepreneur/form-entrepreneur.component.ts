import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-entrepreneur',
  templateUrl: './form-entrepreneur.component.html',
  styleUrls: ['./form-entrepreneur.component.css']
})
export class FormEntrepreneurComponent implements OnInit {

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
