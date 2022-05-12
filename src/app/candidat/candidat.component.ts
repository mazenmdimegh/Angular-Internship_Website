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
    if (this.route.snapshot.url.join('')=="candidat"){
      this.router.navigate(['candidat/compte'])
    }
    if(this.route.snapshot.url.join('')=="candidature"){
      const candidature = document.getElementById('candidature');

    if (candidature != null) {
      candidature.style.backgroundColor = '#a957bd63';
      candidature.style.borderRadius='20px'
    }
    }
    else if(this.route.snapshot.url.join('')=="compte"){
      const compte = document.getElementById('compte');

    if (compte != null) {
      compte.style.backgroundColor = '#a957bd63';
      compte.style.borderRadius='20px'
    }
    }
    else if(this.route.snapshot.url.join('')=="favoriis"){
      const favoriis = document.getElementById('favoriis');

    if (favoriis != null) {
      favoriis.style.backgroundColor = '#a957bd63';
      favoriis.style.borderRadius='20px'
    }
    }
    
  }
  
  compte(){
    


    const candidature = document.getElementById('candidature');
    if (candidature != null) {
      candidature.style.backgroundColor = '#ded2ed';
      candidature.style.borderRadius='20px'
    }
      const compte = document.getElementById('compte');
    if (compte != null) {
      compte.style.backgroundColor = '#a957bd63';
      compte.style.borderRadius='20px'
    }
      const favoriis = document.getElementById('favoriis');
    if (favoriis != null) {
      favoriis.style.backgroundColor = '#ded2ed';
      favoriis.style.borderRadius='20px'
    }
    this.router.navigate(['compte'], {relativeTo:this.route});
  }
 candidature(){
  const candidature = document.getElementById('candidature');
  if (candidature != null) {
    candidature.style.backgroundColor = '#a957bd63';
    candidature.style.borderRadius='20px'
  }
    const compte = document.getElementById('compte');
  if (compte != null) {
    compte.style.backgroundColor = '#ded2ed';
    compte.style.borderRadius='20px'
  }
    const favoriis = document.getElementById('favoriis');
  if (favoriis != null) {
    favoriis.style.backgroundColor = '#ded2ed';
    favoriis.style.borderRadius='20px'
  }

    this.router.navigate(['candidature'], {relativeTo:this.route});
  }
  favoriis(){
    const candidature = document.getElementById('candidature');
  if (candidature != null) {
    candidature.style.backgroundColor = '#ded2ed';
    candidature.style.borderRadius='20px'
  }
    const compte = document.getElementById('compte');
  if (compte != null) {
    compte.style.backgroundColor = '#ded2ed';
    compte.style.borderRadius='20px'
  }
    const favoriis = document.getElementById('favoriis');
  if (favoriis != null) {
    favoriis.style.backgroundColor = '#a957bd63';
    favoriis.style.borderRadius='20px'
  }
    this.router.navigate(['favoriis'], {relativeTo:this.route});
  }
  
}
