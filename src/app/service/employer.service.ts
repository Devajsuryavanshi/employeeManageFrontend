import { Injectable } from '@angular/core';
import { Employer } from '../entity/employer';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private httpClient: HttpClient) { 
  }

  private username = "Anuj";
  private password = "123aj321"

  private baseUrl = "http://localhost:8080/employer";

  postEmployer(emp:Employer):Observable<Response>{
    const headers = (new HttpHeaders({Authorization:'Basic '+btoa(this.username+":"+this.password)}));
    if(emp.id == 0)
    return this.httpClient.post<Response>(this.baseUrl, emp, {headers});
    else
    return this.httpClient.put<Response>(this.baseUrl, emp, {headers});
  }

  getEmployerByEmail(email:String): Observable<Employer>{
    const headers = (new HttpHeaders({Authorization:'Basic '+btoa(this.username+":"+this.password)}));
    return this.httpClient.get<Employer>(this.baseUrl+'/'+email,{headers});
  }

  deleteEmployerbyId(id:number):Observable<Response>{
    const headers = (new HttpHeaders({Authorization:'Basic '+btoa(this.username+":"+this.password)}));
    return this.httpClient.delete<Response>(this.baseUrl + '/' + id, {headers});
  }

  getSkillCount(): Observable<Number>{
    const headers = (new HttpHeaders({Authorization:'Basic '+btoa(this.username+":"+this.password)}));
    return this.httpClient.get<Number>(this.baseUrl+'/skillCount', {headers});
  }

  getCertCount(): Observable<Number>{
    const headers = (new HttpHeaders({Authorization:'Basic '+btoa(this.username+":"+this.password)}));
    return this.httpClient.get<Number>(this.baseUrl+'/certCount', {headers});
  }
}
