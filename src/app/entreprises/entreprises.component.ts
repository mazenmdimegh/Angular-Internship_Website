import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.css','../../assets/vendor/font-awesome/css/font-awesome.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class EntreprisesComponent   {
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

}
