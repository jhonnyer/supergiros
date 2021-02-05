import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// importar la interfaz del modelo 
import {Articulo} from '../models/Articulo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  API_URI='http://localhost:3500/supergiros'

  constructor(private http:HttpClient) { }

  // consultar juegos disponibles 
  getArticulos(){
    // return this.http.get('http://localhost:3000/api/games');
    return this.http.get(this.API_URI+'/articulos');
  }
  // Consultar un juego por un id 
  getArticulo(id:string){
    return this.http.get(this.API_URI+'/articulos/'+id);
  }

  // guardar un juego, debe cumplir con la interfaz del modelo
  saveArticulo(articulo:Articulo){
    return this.http.post(this.API_URI+'/articulos',articulo);
  }
  // Eliminar juego 
  deleteArticulo(id:string){
    return this.http.delete(this.API_URI+'/articulos/'+id);
  }
  // Actualizar juego 
  // updateGame(id:string|number, updateGame:Game){
  // updateGame(id:string|number, updateGame:Game):Observable<Game>{
  //   // updateGame
  //   // return this.http.put(this.API_URI+'/games/'+id, updateGame);
  //   return this.http.put(this.API_URI+'/games/${id})', updateGame);
  // }

  updateArticulo(id:string|number, updateArticulo:Articulo):Observable<Articulo>{
    return this.http.put(this.API_URI+'/articulos/'+id,updateArticulo);
  // updateGame(game:Game){
  //   return this.http.post(this.API_URI+'/games',game);
  }
}