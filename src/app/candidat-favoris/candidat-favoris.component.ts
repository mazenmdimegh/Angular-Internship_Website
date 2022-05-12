import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from '../services/offre.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-candidat-favoris',
  templateUrl: './candidat-favoris.component.html',
  styleUrls: ['../candidat/candidat.component.css']
})
export class CandidatFavorisComponent implements OnInit {
public Mesfavoris:any;
FAvorisoffres:any;
  constructor(private router: Router,private tokenStorage: TokenStorageService,public serviceToken:TokenStorageService,private offreService :OffreService) { }

  ngOnInit(): void {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['home'])
    }
    if(!(this.tokenStorage.getUser().roles[0]=="ROLE_CANDIDAT")) {
      this.router.navigate(['home'])
    };

    // this.serviceToken.addFavoris("69");
    // if(this.serviceToken.getFavoris()){
    //   //console.log("favoriis")
    // }
    // let a =
    this.Mesfavoris=JSON.parse(this.serviceToken.getFavoris());
    console.log(this.Mesfavoris.ids);
    this.offreService.getFavoris(this.Mesfavoris)
    .subscribe(data=>{ 
      this.FAvorisoffres=data;
      console.log(this.FAvorisoffres);
      
    })
    
  }
  removeFav(id:any){
    this.tokenStorage.removeFavoris(id);
      
  }


}
