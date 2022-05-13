import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';
import { OffreService } from '../services/offre.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css', '../../assets/vendor/font-awesome/css/font-awesome.css'],
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
  form: any = {
    username:null,
    email:null,
    tel:null,
    lieu:null,
    titre: null,
    SiteInternet: null,
    linkedIn: null,
    github: null,
    lettreMotivation: null
  };
  user:any;
  submitted=false;
  details:any;
  public offre: any;
  public candidats: any;
  public offreIdFromRoute: number;
  id:any;
  isLoginFailed=false;
  isSuccessful=false;
  currentDateTime: any;
  constructor(private fb: FormBuilder, private authService: AuthService, private modalService: NgbModal, private route: ActivatedRoute, private offreservice: OffreService, public datepipe: DatePipe, private tokenStorage: TokenStorageService,private userservice: UserService) { }
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
    const routeParams = this.route.snapshot.paramMap;
    this.offreIdFromRoute = Number(routeParams.get('offreId'));
    this.offreservice.getOffreById(this.offreIdFromRoute).subscribe(data => {
      this.offre = data;
      // console.log(this.offre);
      let currentDateTime = this.datepipe.transform((new Date), 'yyyy-MM-dd');
      console.log(currentDateTime);

      const userr = this.tokenStorage.getUser();
      this.id = userr.id;
    })
    this.offreservice.getCandidats(this.offreIdFromRoute).subscribe(data => {
      this.candidats = data;
    })
    const us= this.tokenStorage.getUser();
      this.id = us.id;
    this.details=this.userservice.getDet(this.id);
    console.log(this.id);
    const userr = this.tokenStorage.getUser();
    this.userservice.getUser(userr.id).subscribe(data => {
      this.user = data;
      this.form.username=this.user.username;
      this.form.github=this.details.github;
      this.form.linkedIn=this.details.github;
      this.form.github=this.details.github;
      this.form.email=this.user.email;
      this.form.tel=this.user.tel;
      this.form.lieu=this.user.gouvernorat;
      console.log(data);
    })
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });

  }

  onSubmit() {
    const { titre, SiteInternet, linkedIn, github, lettreMotivation }=this.form;
    console.log(titre, SiteInternet, linkedIn, github, lettreMotivation)
  }
  a() {
    this.isSuccessful = true;
    this.submitted = false;
}
  sub(idoffre:number) {
    const { titre, SiteInternet, linkedIn, github, lettreMotivation }=this.form;
    console.log(this.id, titre, SiteInternet, linkedIn, github, lettreMotivation);
    this.userservice.addcandidature(idoffre,this.id).subscribe(
      dat => {
        
        console.log("MesCandidature")
      },
      err => {
        console.log("MesCandidatureFailed")
        this.isLoginFailed = true;
      }
    );
    this.userservice.AddDetails(this.id, titre, SiteInternet, linkedIn, github, lettreMotivation).subscribe(
      data => {
        
        this.submitted=true;
        setTimeout(() => this.a(), 2000);
        this.isLoginFailed = false;
        setTimeout(() => this.modalService.dismissAll(), 3000);
      },
      err => {
        this.isLoginFailed = true;
      }
    );
   
  }

}
