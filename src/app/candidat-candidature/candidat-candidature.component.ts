import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
    selector: 'app-candidat-candidature',
    templateUrl: './candidat-candidature.component.html',
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
export class CandidatCandidatureComponent implements OnInit{
    closeResult: string;
    
    constructor(private route: ActivatedRoute, private router: Router, private modalService: NgbModal,private tokenStorage: TokenStorageService) { }
    ngOnInit(): void {
      if (!this.tokenStorage.getToken()) {
        this.router.navigate(['home'])
      }
      if(!(this.tokenStorage.getUser().roles[0]=="ROLE_CANDIDAT")) {
        this.router.navigate(['home'])
      };
    }
    openScrollableContent(quanticfy) {
        this.modalService.open(quanticfy, { scrollable: true });
      }
    
   
    
}
