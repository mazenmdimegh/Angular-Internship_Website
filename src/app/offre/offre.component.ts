import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';
import { OffreService } from '../services/offre.service';

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
  public offre : any;
  public candidats : any;
  public  offreIdFromRoute :number;
  currentDateTime:any;
  constructor(private fb:FormBuilder,private authService:AuthService,private modalService: NgbModal,private route: ActivatedRoute,private offreservice : OffreService,public datepipe: DatePipe) { }
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
    const routeParams = this.route.snapshot.paramMap;
   this.offreIdFromRoute = Number(routeParams.get('offreId'));
   this.offreservice.getOffreById(this.offreIdFromRoute).subscribe(data=>{ 
    this.offre=data;
    // console.log(this.offre);
    let currentDateTime =this.datepipe.transform((new Date), 'yyyy-MM-dd');
    console.log(currentDateTime);
    
  })
  this.offreservice.getCandidats(this.offreIdFromRoute).subscribe(data=>{ 
    this.candidats=data;
  })
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
    
  }


  

}
