import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
//import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { StageComponent } from './stage/stage.component';
import { AlternanceComponent } from './alternance/alternance.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { FormCondidatComponent } from './signup/form-condidat/form-condidat.component';
import { FormEntrepreneurComponent } from './signup/form-entrepreneur/form-entrepreneur.component';
import { FavorisComponent } from './favoris/favoris.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from './chat/chat.component';
import { OffreComponent } from './offre/offre.component';
import { CandidatComponent } from './candidat/candidat.component';
import { CandidatCandidatureComponent } from './candidat-candidature/candidat-candidature.component';
import { CandidatCompteComponent } from './candidat-compte/candidat-compte.component';
import { CandidatFavorisComponent } from './candidat-favoris/candidat-favoris.component';
import { EntrepreneurComponent } from './entrepreneur/entrepreneur.component';
import { EntrepreneurOffreComponent } from './entrepreneur-offre/entrepreneur-offre.component';
import { EntrepreneurCompteComponent } from './entrepreneur-compte/entrepreneur-compte.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { SideBarComponent } from './back-office/side-bar/side-bar.component';
import { OffreManagerComponent } from './back-office/offre-manager/offre-manager.component';
import { UserManagerComponent } from './back-office/user-manager/user-manager.component';
import { DatePipe } from '@angular/common';
import { StageEteComponent } from './stage-ete/stage-ete.component';
import { StagePFEComponent } from './stage-pfe/stage-pfe.component';
import { StageEtrangerComponent } from './stage-etranger/stage-etranger.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    EntreprisesComponent,
    StageComponent,
    AlternanceComponent,
    FreelanceComponent,
    FormCondidatComponent,
    FormEntrepreneurComponent,
    FavorisComponent,
    ChatComponent,
    OffreComponent,
    CandidatComponent,
    CandidatCandidatureComponent,
    CandidatCompteComponent,
    CandidatFavorisComponent,
    EntrepreneurComponent,
    EntrepreneurOffreComponent,
    EntrepreneurCompteComponent,
    BackOfficeComponent,
    SideBarComponent,
    OffreManagerComponent,
    UserManagerComponent,
    StageEteComponent,
    StagePFEComponent,
    StageEtrangerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
