import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const Service_API = "http://localhost:8080/api/offres"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private httpClient: HttpClient) { }


  public getOffreById( id: number) {
    return this.httpClient.get(Service_API + "/OffreById/"+id);
  }
  public getCandidats( id: number) {
    return this.httpClient.get(Service_API + "/Candidats/"+id);
  }

  public getFavoris(body: any) {
    return this.httpClient.post(Service_API + "/OffreFavorisByArray", body, httpOptions);
  }
  public SuppOffre(id:number){
    return this.httpClient.delete(Service_API + "/deleteById/" + id)
  }
  

  
}