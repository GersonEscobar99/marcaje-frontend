import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marcaje } from '../interfaces/marcaje.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcajeService {

  private apiUrl = 'http://3.133.145.220:8080/sistema-marcaje-backend/marcajes'

  constructor(private http : HttpClient) { }

  registrarEntrada(username: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/entrada/${username}`,{});
  }

  registrarSalida(username: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/salida/${username}`, {});
  }

  obtenerHistorial(username: string): Observable<Marcaje[]> {
    return this.http.get<Marcaje[]>(`${this.apiUrl}/historial/${username}`);
  }

  obtenerUltimoMarcaje(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/ultimo/${username}`);
  }

  obtenerMarcajesPaginados(page:number, size: number):Observable<any>{
    const url = `${this.apiUrl}/paginados/`
    let params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<any>(url, {params})
  }

  obtenerRol(rol: number):Observable<any>{
    const url = "http://3.133.145.220:8080/sistema-marcaje-backend/auth/roles/"
    return this.http.get<any>(`${url} ${rol}`);
  }
}