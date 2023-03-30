import { Injectable } from '@angular/core';
import { TacheModel } from '../model/TacheModel';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  tacheModel: Array<TacheModel> = [];
  url: string = 'http://localhost:3000/taches' ;
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<Array<TacheModel>>(this.url);
    }
    
  addTache (a: TacheModel) {
  return this.http.post(this.url, a);
    }
  getOne(id: number){
      return this.http.get<TacheModel>(this.url+'/'+id);
    }
  deleteTache(a: TacheModel) {
    return this.http.delete<TacheModel>(this.url+ '/' +a.id);
  }
  updateTache(a: TacheModel){
    return this.http.put<TacheModel>(this.url+'/'+a.id, a);
  } 
}
