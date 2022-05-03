import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-entrepreneur-compte',
  templateUrl: './entrepreneur-compte.component.html',
  styleUrls: ['../entrepreneur/entrepreneur.component.css']
})
export class EntrepreneurCompteComponent implements OnInit {
  public moncompte= true;
  public parametre= false;
  username=null ;
  form: any = {
    username: null,
    email: null,
    password: null,
    societe: null,
    ncin: null,
    tel: null,
    gouvernorat: null,
  };
  submitted=false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private route: ActivatedRoute, private router: Router,private tokenStorage: TokenStorageService,private authService: AuthService) { }

  ngOnInit(): void {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['home'])
    }else if (!(this.tokenStorage.getUser().roles[0]=="ROLE_ENTREPRENEUR")){
      this.router.navigate(['home'])
    }
    
  const user = this.tokenStorage.getUser();
    this.form.username=user.username;
    this.form.email=user.email;
  this.username = user.username;
  }
  
  mcompte(){
    this.moncompte=true;
    this.parametre=false;
  }
  param(){
   this.moncompte=false;
   this.parametre=true;
  }
  a(){
    this.isSuccessful = true;
    this.submitted=false;
  }
  sub() {
    const { username, email, password, societe, ncin, tel, gouvernorat } = this.form;
    console.log(username, email, password, societe, ncin, tel, gouvernorat);
    this.authService.updateE(username, email, password, ncin, tel, gouvernorat, societe).subscribe(
      data => {
        this.submitted=true;
        setTimeout(() => this.a(), 2000);
        this.isSignUpFailed = false;
        setTimeout(() => this.router.navigate(['login']), 3000);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  subPassword(){
    
  }
}
