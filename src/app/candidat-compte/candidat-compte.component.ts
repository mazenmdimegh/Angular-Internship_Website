import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-candidat-compte',
  templateUrl: './candidat-compte.component.html',
  styleUrls: ['../candidat/candidat.component.css']
})
export class CandidatCompteComponent implements OnInit {
  public moncompte= true;
  public parametre= false;
  public LoggedIn = false;
  user:any;
  form: any = {
    username: null,
    email: null,
    ncin: null,
    tel: null,
    faculte:null,
    gouvernorat: null,
    promotion: null
  };
  constructor(private route: ActivatedRoute, private router: Router,private tokenStorage: TokenStorageService, private userservices:UserService) { }

  ngOnInit(): void {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['home'])
    }
    if(!(this.tokenStorage.getUser().roles[0]=="ROLE_CANDIDAT")) {
      this.router.navigate(['home'])
    };
    const users = this.tokenStorage.getUser();
    
      this.userservices.getMesCandidatures( users.id)
    .subscribe(data=>{ 
      this.user=data;   
      this.form.username=this.user.username;
    this.form.email=this.user.email;
    this.form.tel=this.user.tel;
    this.form.ncin=this.user.ncin;
    this.form.faculte=this.user.faculte;
    this.form.promotion=this.user.promotion;
    this.form.gouvernorat=this.user.gouvernorat;  
    })
    
  }
  
  mcompte(){
    this.moncompte=true;
    this.parametre=false;
  }
  param(){
   this.moncompte=false;
   this.parametre=true;
  }

}
