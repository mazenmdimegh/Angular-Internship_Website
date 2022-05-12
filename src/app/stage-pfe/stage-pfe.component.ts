import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-alternance',
  templateUrl: './stage-pfe.component.html',
  styleUrls: ['./stage-pfe.component.css']
})
export class StagePFEComponent implements OnInit {
  public Offres:any;
  public AllOffres:any;
  public filteredwithSector=[];
  public filteredwithtype=[];
  public filteredwithLieu=[];
  public disappea=false;
  public size:number=4;
  public currentPage:number=0;
  public totalPages:any;
  public pages:Array<number> |undefined ;
  public Secteur=[];
  public Lieu=[];
  public Type=[];
 
  constructor(private authService:AuthService,private service:TokenStorageService) { }

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
      console.log(this.Offres)
    }
    console.log(this.Secteur)
  }
  filter(){
    console.log("filtre")
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
      if (this.Lieu.length==0 ) {
      this.filter();
      }
      else{
        this.filter();
        this.filter2(this.Offres, this.Lieu);
      }
      
    }
    else{
      this.Lieu.push(i);
      this.filter2(this.Offres, this.Lieu);
    }
    console.log(this.Lieu)
  }
  filter2(Offres, Lieu){
    this.filteredwithLieu=[];
    const check= offre => Lieu.includes(offre.lieu);
      const offres$=from(Offres);
      const filteredwithLieu$=offres$
      .pipe(filter(offre =>check(offre)))
      filteredwithLieu$.subscribe(of =>this.filteredwithLieu.push(of))
      console.log(this.filteredwithLieu)
      this.Offres=this.filteredwithLieu;
  }
  check3(i:String){
    if (this.Type.includes(i)){
      this.Type.splice(this.Type.indexOf(i),1)
      console.log("Exist")
      console.log(this.Type)
      if (this.Type.length==0 ) {
        this.filter();
      this.filter2(this.Offres , this.Lieu);
      }
      else{
        this.filter();
        this.filter2(this.Offres, this.Lieu);
      this.filter3(this.Offres, this.Type);
      }
      
      
    }
    else{
      this.Type.push(i);
      this.filter3(this.Offres, this.Type);
    }
    
  }
  filter3(Offres, Type){
    this.filteredwithtype=[];
    const check= offre => Type.includes(offre.categorie);
      const offres$=from(Offres);
      const filteredwithtype$=offres$
      .pipe(filter(offre =>check(offre)))
      filteredwithtype$.subscribe(of =>this.filteredwithtype.push(of))
      console.log(this.filteredwithtype)
      this.Offres=this.filteredwithtype;

  }
  onPageProduits(i:number){
    this.currentPage=i;
    this.Getoffre();
  }
  Getoffre(){
    this.authService.getOffre(this.currentPage, this.size)
    .subscribe(data=>{ 
      this.AllOffres=data;
      // this.AllOffres=this.AllOffres._embedded.offreEntities;
      this.Offres=data;
      console.log(this.Offres)
      // this.Offres=this.Offres._embedded.offreEntities;
      this.totalPages=this.Offres["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      console.log(this.totalPages);
      console.log(this.Offres);
      
    })
  }
  addFav(id:any){
    this.service.addFavoris(id)
  }
}

