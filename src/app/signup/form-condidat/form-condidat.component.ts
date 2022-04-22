import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-condidat',
  templateUrl: './form-condidat.component.html',
  styleUrls: ['./form-condidat.component.css']
})
export class FormCondidatComponent implements OnInit {
  model: NgbDateStruct;
  constructor(private fb:FormBuilder,private authService:AuthService) { }
  registrationForm= this.fb.group({
    nom:[''],
    prenom:[''],
    email:[''],
    password:[''],
    ncin:[''],
    tel:[''],
    faculte:[''],
    promotion:[''],
    pj:[''],
    etat:['']
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