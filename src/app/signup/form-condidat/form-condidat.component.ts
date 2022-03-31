import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { first } from 'rxjs-compat/operator/first';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-condidat',
  templateUrl: './form-condidat.component.html',
  styleUrls: ['./form-condidat.component.css']
})
export class FormCondidatComponent implements OnInit {

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
