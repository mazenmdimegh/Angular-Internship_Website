import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const Service_API = "http://localhost:8080/api/users"

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  public getMesCandidatures( id: number) {
    return this.httpClient.get(Service_API + "/"+id);
  }
  public getMesOffres( id: number) {
    return this.httpClient.get(Service_API + "/MesOffres/"+id);
  }
  public getDet( id: number) {
    return this.httpClient.get(Service_API + "/userDetails/"+id);
  }
  public getUser( id: number) {
    return this.httpClient.get(Service_API + "/"+id);
  }
  AddDetails(id_Candidat:number,titre: string, siteInternet: string, linkedIn: string, github: string, lettreMotivation: string): Observable<any> {
    return this.httpClient.post(Service_API + '/userDetails', {
      id_Candidat, titre, siteInternet, linkedIn, github, lettreMotivation  
    }, httpOptions);
  }

  addcandidature(id_offre:number,id_user:number): Observable<any> {
    return this.httpClient.post(Service_API + '/AddMesCandidatures/'+id_user+'/'+id_offre, {
    }, httpOptions);
  } 
}