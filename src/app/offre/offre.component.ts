import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css','../../assets/vendor/font-awesome/css/font-awesome.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .dark-modal .modal-content {
    background-color: #292b2c;
    color: white;
    
  }
  .modal-dialog{
    margin: 0 26vw;
  }
  .modal-body{
    margin: 0 3vw!important;
  }
  .dark-modal .close {
    color: white;
  }
  .light-blue-backdrop {
    background-color: #5cb3fd;
  }
`]
})
export class OffreComponent implements OnInit {

  constructor(private fb:FormBuilder,private authService:AuthService,private modalService: NgbModal) { }
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
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }


  

}
