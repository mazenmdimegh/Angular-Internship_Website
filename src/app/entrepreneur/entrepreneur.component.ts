import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterState, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.css']
})
export class EntrepreneurComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    // if (this.route.snapshot.url.join('')=="entrepreneur"){
    // this.router.navigate(['entrepreneur/comptee'])
    // }
    if(this.route.snapshot.url.join('')=="offree"){
      const offre = document.getElementById('offre');

    if (offre != null) {
      offre.style.backgroundColor = '#a957bd63';
      offre.style.borderRadius='20px'
    }
    }
    else if(this.route.snapshot.url.join('')=="comptee"){
      const compte = document.getElementById('compte');

    if (compte != null) {
      compte.style.backgroundColor = '#a957bd63';
      compte.style.borderRadius='20px'
    }
    }
    console.log("aaaaaaaaaaaa")
    console.log()
  }
  comptee(){
    const offre = document.getElementById('offre');
    if (offre != null) {
      offre.style.backgroundColor = '#ded2ed';
    }
    const compte = document.getElementById('compte');

    if (compte != null) {
      compte.style.backgroundColor = '#a957bd63';
      compte.style.borderRadius='20px'
    }
    this.router.navigate(['comptee'], {relativeTo:this.route});
  }
  notificationn(){
    this.router.navigate(['notificationn'], {relativeTo:this.route});
  }
  offree(){
    const offre = document.getElementById('offre');

    if (offre != null) {
      offre.style.backgroundColor = '#a957bd63';
      offre.style.borderRadius='20px'
    }
    const compte = document.getElementById('compte');

    if (compte != null) {
      compte.style.backgroundColor = '#ded2ed';
    }
    this.router.navigate(['offree'], {relativeTo:this.route});
    // routerState: RouterState
    // snapshot: RouterStateSnapshot
    // url: "/entrepreneur/offree"
    //console.log(this.rs);
    //console.log(this.route.snapshot._routerState.url);
  }
}
