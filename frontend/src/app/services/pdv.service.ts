import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// importar la interfaz del modelo 
import {PDV} from '../models/PDV';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdvService {

  API_URI='http://localhost:3500/supergiros'

  constructor(private http:HttpClient) { }

  // consultar juegos disponibles 
  getPDVs(){
    // return this.http.get('http://localhost:3000/api/games');
    return this.http.get(this.API_URI+'/pdv');
  }
  // Consultar un juego por un id 
  getPDV(id:string){
    return this.http.get(this.API_URI+'/pdv/'+id);
  }

  // guardar un juego, debe cumplir con la interfaz del modelo
  savePDV(pdv:PDV){
    return this.http.post(this.API_URI+'/pdv',pdv);
  }
  // Eliminar juego 
  deletePDV(id:string){
    return this.http.delete(this.API_URI+'/pdv/'+id);
  }
  // Actualizar juego 
  // updateGame(id:string|number, updateGame:Game){
  // updateGame(id:string|number, updateGame:Game):Observable<Game>{
  //   // updateGame
  //   // return this.http.put(this.API_URI+'/games/'+id, updateGame);
  //   return this.http.put(this.API_URI+'/games/${id})', updateGame);
  // }

  updatePDV(id:string|number, updatePDV:PDV):Observable<PDV>{
    return this.http.put(this.API_URI+'/pdv/'+id,updatePDV);
  // updateGame(game:Game){
  //   return this.http.post(this.API_URI+'/games',game);
  }
}