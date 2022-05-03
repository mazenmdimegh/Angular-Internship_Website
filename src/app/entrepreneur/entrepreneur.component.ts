import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.css']
})
export class EntrepreneurComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['entrepreneur/comptee'])
  }
  comptee(){
    this.router.navigate(['comptee'], {relativeTo:this.route});
  }
  notificationn(){
    this.router.navigate(['notificationn'], {relativeTo:this.route});
  }
  offree(){
    this.router.navigate(['offree'], {relativeTo:this.route});
  }
}
