import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-alternance',
  templateUrl: './alternance.component.html',
  styleUrls: ['./alternance.component.css']
})
export class AlternanceComponent implements OnInit {
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
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.Getoffre();
  }
  disappear(){
    this.disappea=!this.disappea;
    console.log("disappea")
  }
  check(i:string){
    if (this.Secteur.includes(i)){
      this.Secteur.splice(this.Secteur.indexOf(i),1)
      console.log("Exist")
      console.log(this.Secteur)
      if (this.Secteur.length==0){
        this.Offres=this.AllOffres;
      }
      else{
        this.filter();
      }
      
    }
    else{
      this.Secteur.push(i);
      this.filter();
    }
    console.log(this.Secteur)
  }
  filter(){
    this.filteredwithSector=[];
    const check= offre => this.Secteur.includes(offre.service);
      const offres$=from(this.AllOffres);
      const filteredwithSector$=offres$
      .pipe(filter(offre =>check(offre)))
      filteredwithSector$.subscribe(of =>this.filteredwithSector.push(of))
      console.log(this.filteredwithSector)
      this.Offres=this.filteredwithSector;
  }
  // --------------------------------------------------------------
  check2(i:string){
    if (this.Lieu.includes(i)){
      this.Lieu.splice(this.Lieu.indexOf(i),1)
      console.log("Exist")
      console.log(this.Lieu)
      if (this.Lieu.length==0){
        this.Offres=this.AllOffres;
      }
      else{
        this.filter();
      }
      
    }
    else{
      this.Lieu.push(i);
      this.filter();
    }
    console.log(this.Lieu)
  }
  filter2(){
    this.filteredwithLieu=[];
    const check= offre => this.Lieu.includes(offre.service);
      const offres$=from(this.AllOffres);
      const filteredwithLieu$=offres$
      .pipe(filter(offre =>check(offre)))
      filteredwithLieu$.subscribe(of =>this.filteredwithLieu.push(of))
      console.log(this.filteredwithLieu)
      this.Offres=this.filteredwithLieu;
  }
  onPageProduits(i:number){
    this.currentPage=i;
    this.Getoffre();
  }
  Getoffre(){
    this.authService.getOffre(this.currentPage, this.size)
    .subscribe(data=>{ 
      this.AllOffres=data;
      this.AllOffres=this.AllOffres._embedded.offreEntities;
      this.Offres=data;
      this.Offres=this.Offres._embedded.offreEntities;
      this.totalPages=this.Offres["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      console.log(this.totalPages);
      console.log(this.Offres);
      
    })
  }
}
