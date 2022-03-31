import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-freelance',
  templateUrl: './freelance.component.html',
  styleUrls: ['./freelance.component.css']
})
export class FreelanceComponent implements OnInit {
  public Offres:any;

  public size:number=1;
  public currentPage:number=0;
  public totalPages:any;
  public pages:Array<number> |undefined ;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.Getoffre();
  }
  onPageProduits(i:number){
    this.currentPage=i;
    this.Getoffre();
  }
  Getoffre(){
    this.authService.getOffre(this.currentPage, this.size)
    .subscribe(data=>{ 
      this.Offres=data;
      this.totalPages=this.Offres["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      console.log(this.totalPages);
      console.log(this.Offres);
      
    })
  }
}
