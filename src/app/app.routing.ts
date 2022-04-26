import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { StageComponent } from './stage/stage.component';
import { AlternanceComponent } from './alternance/alternance.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { FormCondidatComponent } from './signup/form-condidat/form-condidat.component';
import { FormEntrepreneurComponent } from './signup/form-entrepreneur/form-entrepreneur.component';
import { FavorisComponent } from './favoris/favoris.component';
import { ChatComponent } from './chat/chat.component';
import { OffreComponent } from './offre/offre.component';
import { CandidatComponent } from './candidat/candidat.component';
import { CandidatCandidatureComponent } from './candidat-candidature/candidat-candidature.component';
import { CandidatNotificationComponent } from './candidat-notification/candidat-notification.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',     component: SignupComponent },
    { path: 'chat',     component: ChatComponent },
    { path: 'offre',     component: OffreComponent },
    { path: 'formC',     component: FormCondidatComponent },
    { path: 'formE',     component: FormEntrepreneurComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'favoris',          component: FavorisComponent },

    { path: 'login',          component: LoginComponent },
    {path:'stage',            component: StageComponent},
    {path:'alternance',            component: AlternanceComponent},
    {path:'freelance',            component: FreelanceComponent},
    { path: 'entreprises',          component: EntreprisesComponent },
    { path: 'candidat',  component: CandidatComponent ,
    children:[
      {path:'candidature',component: CandidatCandidatureComponent},
      {path:'notification',component: CandidatNotificationComponent}
    ]},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
export const routingComponents = [
  CandidatComponent,
  CandidatCandidatureComponent,
  CandidatNotificationComponent
]