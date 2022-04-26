import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  public Offres:any;
  public AllOffres:any;
  public filteredwithSector=[];
  public filteredwithLieu=[];
  public disappea=false;
  public size:number=4;
  public currentPage:number=0;
  public totalPages:any;
  public pages:Array<number> |undefined ;
  public Secteur=[];
  public Lieu=[];
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  
  compte(){
    this.router.navigate(['compte'], {relativeTo:this.route});
  }
 candidature(){
    this.router.navigate(['candidature'], {relativeTo:this.route});
  }
  favoriis(){
    this.router.navigate(['favoriis'], {relativeTo:this.route});
  }
  notification(){
    this.router.navigate(['notification'], {relativeTo:this.route});
  }

}
