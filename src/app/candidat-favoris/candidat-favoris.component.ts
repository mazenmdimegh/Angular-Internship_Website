import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-candidat-favoris',
  templateUrl: './candidat-favoris.component.html',
  styleUrls: ['../candidat/candidat.component.css']
})
export class CandidatFavorisComponent implements OnInit {

  constructor(private router: Router,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['home'])
    }
    if(!(this.tokenStorage.getUser().roles[0]=="ROLE_CANDIDAT")) {
      this.router.navigate(['home'])
    };
  }

}
