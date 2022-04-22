import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public host:string="http://localhost:8081" ;
  constructor(private httpClient:HttpClient) { }
  public AddStudent(body:any){
    return this.httpClient.post(this.host+"/addEtudiant",body);
  }
  public AddEntrepreneur(body:any){
    return this.httpClient.post(this.host+"/entrepreneurEntities",body);
  }
  public getOffre(page:number,size:number){
    return this.httpClient.get(this.host+"/offreEntities?page="+page+"&size="+size);

  }
}