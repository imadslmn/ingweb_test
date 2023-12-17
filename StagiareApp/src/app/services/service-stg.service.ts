import { Injectable } from '@angular/core';
import {Stagiare} from "../stagiare";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceStgService {
/*StgList:Stagiare[]=[
  {id:1,nom:"nom1",prenom:"prenom1",adressmail:"adressmail1@gmail.com"},
  {id:2,nom:"nom2",prenom:"prenom2",adressmail:"adressmail2@gmail.com"},
  {id:3,nom:"nom3",prenom:"prenom3",adressmail:"adressmail3@gmail.com"}
];*/
  private url = "http://localhost:8081/stagiares";
  constructor(private httpClient:HttpClient) {

  }
  getAllStg() :Observable<Stagiare[]>{
  return this.httpClient.get<Stagiare[]>(this.url);
  }
  AddStg(s:Stagiare){
  return this.httpClient.post<Stagiare>(this.url,s);
  }
  updateStg(id:number,stagiare:Stagiare){
    return this.httpClient.put<Stagiare>(this.url+"/"+id,stagiare);
  }
  deleteStg(id:number){
    return this.httpClient.delete<String>(this.url+"/"+id);
  }

  getStg(id: number) {
    return this.httpClient.get<Stagiare>(this.url+"/"+id);
  }
}
