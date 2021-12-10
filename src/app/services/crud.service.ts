import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { Dependencie } from '../models/Dependencie';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl = "http://localhost/meanoto"

  constructor( private clienteHttp: HttpClient ) {}

  register(user: User): Observable<any>{
    console.log(user)  
    return this.clienteHttp.post(`${this.baseUrl}/registerUser.php`,user, {responseType: 'text'});
  }

  getUser(user: User): Observable<User>{
    return this.clienteHttp.post<User>(`${this.baseUrl}/getUser.php`,user);
  }

  getUserById(id: number | string | null): Observable<User>{
    return this.clienteHttp.post<User>(`${this.baseUrl}/getUserById.php`,id);
  }

  getUserByIdReduced(id: number | undefined): Observable<User>{
    return this.clienteHttp.post<User>(`${this.baseUrl}/getUserByIdReduced.php`,id);
  }

  getUserReduced(){
    return this.clienteHttp.get<any>(`${this.baseUrl}/getUserReduced.php`);
  }

  registerDependence(dependence: Dependencie): Observable<any>{
    return this.clienteHttp.post(`${this.baseUrl}/registerDependence.php`, dependence);
  }

  getAllDependences(){
    return this.clienteHttp.get<any>(`${this.baseUrl}/getAllDependences.php`)
  }

  deleteDependence(id: number){
    return this.clienteHttp.delete(`${this.baseUrl}/deleteDependence.php?delete=${id}`)
  }

  getAllModules(){
    return this.clienteHttp.get<any>(`${this.baseUrl}/getAllModules.php`)
  }

  getIdNameProf(career: String){
    return this.clienteHttp.get<any>(`${this.baseUrl}/getIdNameProf.php?career=${career}`)
  }

  getModulesUser(id: string | null): Observable<any>{
    return this.clienteHttp.post(`${this.baseUrl}/getModulesUser.php`, id)
  }

  getEventsModule(id: string | null): Observable<any>{
    return this.clienteHttp.post(`${this.baseUrl}/getEventsModule.php`, id)
  }

  inscriptionEventStudent(ids: any){
    return this.clienteHttp.post(`${this.baseUrl}/inscriptionEventStudent.php`, ids)
  }

  getEventsUser(id: string): Observable<any>{
    return this.clienteHttp.post(`${this.baseUrl}/getEventsUser.php`, id)
  }
}
