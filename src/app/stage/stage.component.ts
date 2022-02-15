import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngbd-modal-content',
  template: `<div class="modal-header">
  <h4 class="modal-title">Hi there!</h4>
  <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
</div>
<div class="modal-body">
  <div id="content-container" class="medium-7 small-12 columns">

      
        
      

      











    <div class="content text-left">
        

      
          
    
        <section class="clearfix">
            <h2>Le poste</h2>

            <div class="job-paragraph">
            
    <p>GITEC, acteur du monde du recrutement depuis plus de 40 ans, offre une prestation RH sur toutes les solutions d'emploi.</p><p>Notre cellule IT recrute pour notre clients société du CAC 40,secteur Alimentaire : </p><p></p><p>Un Technicien support utilisateur VIP H/F</p><p></p><p>Passionné(e) par votre métier, vous avez le sens du service et appréciez le travail en équipe. Vous évoluerez dans un contexte international au sein d'une structure à la pointe des nouvelles technologies</p><p></p><p>Au sein d'un groupe de renom et dans un contexte technique stimulant, vous assurez des missions de support et assistance auprès des utilisateurs avec les caractéristiques suivantes :</p><p>-	Installation des postes, de leurs périphériques et de logiciels ;</p><p>-	Support et formation auprès des utilisateurs ;</p><p>-	Résolution d'incidents de niveau 1 et 2 (client VIP) ; </p><p>-	Diagnostic et traitement des incidents à l'IT BAR ;</p><p>-	Support Téléphonie mobile et fixe ; </p><p>-	Rédaction et mise à jour des documentations techniques ; </p><p>-	Participation aux projets IT ; </p><p></p><p>Environnement technique : Windows 7/10, Office 365, Android/ IOS, Intunes, Service Now, Azur.</p>

            </div>
        </section>
    

      
      
    
        <section class="clearfix">
            <h2>Le profil recherché</h2>

            <div class="job-paragraph">
            
    <p>Profil : </p><p></p><p>Vous justifiez obligatoirement d'une expérience en support VIP.</p><p>Vous avez un excellent relationnel, un grand sens du service ainsi que de réelle qualité d'écoute. Vous savez également être réactif et force de proposition.</p><p>Vous êtes motivé(e), rigoureux(se) et autonome.</p><p>La maîtrise de la langue anglaise est obligatoire pour ce poste.</p><p>N'hésitez plus, postulez !</p>

            </div>
        </section>
    


      

      
    
        <section class="clearfix">
            <h2>L&#x27;entreprise</h2>

            <div class="job-paragraph">
            
    <p>GITEC est une société spécialisée dans le recrutement Tertiaire, IT et Ingénierie.                                                                                                        </p><p></p><p>GITEC propose des opportunités d'emploi en Intérim ou en CDD/CDI.                                                                                               </p><p></p><p>GITEC est  avant tout une société à taille humaine, avec sept agences, sept équipes, qui s'appuient sur la proximité, l'écoute et la réactivité.</p>

            </div>
        </section>
    


    </div>


      <hr class="show-for-small-only half-margin" />
        

<ul class="side-bar">

    

    

    
</ul>


      

      <div  id="details-body-end"></div>
    </div>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
</div>`,
})
export class NgbdModalContent {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
  open() {

  }
}

@Component({selector: 'app-stage', templateUrl: './stage.component.html',styleUrls: ['./stage.component.css'],  })
export class StageComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }


}