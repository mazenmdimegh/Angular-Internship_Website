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
    FavorisComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
