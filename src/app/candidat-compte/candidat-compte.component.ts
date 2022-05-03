import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-candidat-compte',
  templateUrl: './candidat-compte.component.html',
  styleUrls: ['../candidat/candidat.component.css']
})
export class CandidatCompteComponent implements OnInit {
  public moncompte= true;
  public parametre= false;
  public LoggedIn = false;
  constructor(private route: ActivatedRoute, private router: Router,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['home'])
    }
    if(!(this.tokenStorage.getUser().roles[0]=="ROLE_CANDIDAT")) {
      this.router.navigate(['home'])
    };
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
