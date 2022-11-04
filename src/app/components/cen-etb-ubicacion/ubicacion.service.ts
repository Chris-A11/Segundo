import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubicacion } from './ubicacion';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private baseURL:string="http://127.0.0.1:8080/V1/ubicacion";

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(`${this.baseURL}`);
  }

  createUbicacion(ubicacion:Ubicacion):Observable<Object>{
    return this.http.post(`${this.baseURL}`, ubicacion);
  }

  getUbicacionById(id:number):Observable<Ubicacion>{
    return this.http.get<Ubicacion>(`${this.baseURL}/${id}`);
  }

  updateUbicacion(id:number, ubicacion:Ubicacion):Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, ubicacion);
  }

  deleteUbicacion(id:number):Observable<Ubicacion>{
    return this.http.delete<Ubicacion>(`${this.baseURL}/${id}`);
  }
}
