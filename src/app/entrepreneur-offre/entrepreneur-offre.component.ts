import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OffreService } from '../services/offre.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-entrepreneur-offre',
  templateUrl: './entrepreneur-offre.component.html',
  styleUrls: ['../candidat/candidat.component.css','../entreprises/entreprises.component.css','../../assets/vendor/font-awesome/css/font-awesome.css','../chat/chat.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .
  .dark-modal .modal-content {

    background-color: #292b2c;
    color: white;
  }
  .modal-dialog{
      margin: 0 20vw;
    }
  .dark-modal .close {
    color: white;
  }
  .light-blue-backdrop {
    background-color: #5cb3fd;
  }
`]
})
export class EntrepreneurOffreComponent implements OnInit{
  closeResult: string;
  MesOffres:any;
  constructor(private route: ActivatedRoute, private router: Router, private modalService: NgbModal,private tokenStorage: TokenStorageService, private userservices : UserService,private offreservice:OffreService) { }
  ngOnInit(): void {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['home'])
    }else if (!(this.tokenStorage.getUser().roles[0]=="ROLE_ENTREPRENEUR")){
      this.router.navigate(['home'])
    }
    const users = this.tokenStorage.getUser();
    this.userservices.getMesOffres( users.id)
    .subscribe(data=>{ 
      this.MesOffres=data;     
      console.log(this.MesOffres); 
    })
  }
  openScrollableContent(quanticfy) {
      this.modalService.open(quanticfy, { scrollable: true });
    }
  
    SuppOffre(id:any){
      this.offreservice.SuppOffre(id)
      .subscribe(data=>{ 
        let msg=data;
        console.log(msg);
        
      })
      console.log("deleeeete")
      window.location.reload();
        
    }
  
}
