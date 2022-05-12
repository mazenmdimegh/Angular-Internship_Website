import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const Service_API = "http://localhost:8080/api/users"


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
  

  
}