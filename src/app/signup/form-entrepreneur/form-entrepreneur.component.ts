import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-entrepreneur',
  templateUrl: './form-entrepreneur.component.html',
  styleUrls: ['./form-entrepreneur.component.css']
})
export class FormEntrepreneurComponent implements OnInit {
  public societe = false;
  constructor(private fb:FormBuilder,private authService:AuthService) { }
  registrationForm= this.fb.group({
    nom:[''],
    prenom:[''],
    email:[''],
    password:[''],
    ncin:[''],
    tel:[''],
    adress:[''],
    secondadress:[''],
    city : [''],
    societe : [''],
    zip:[]
  })
  ngOnInit(): void {
  }
  onChange(deviceValue) {
    console.log(deviceValue);
    if(deviceValue==691){
      this.societe=true
    }else{
      this.societe=false;
    }
}
  sub(){
    console.log(this.registrationForm.value["email"])
    console.log(this.registrationForm.value)
    this.authService.AddEntrepreneur(this.registrationForm.value)
    .subscribe(data=>{
      console.log("success")

    })
  }

}