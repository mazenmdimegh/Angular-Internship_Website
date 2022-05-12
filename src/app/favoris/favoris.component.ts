import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css','../../assets/vendor/font-awesome/css/font-awesome.css']
})
export class FavorisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  

}
