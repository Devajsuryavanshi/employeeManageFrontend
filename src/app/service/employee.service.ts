import { Injectable } from '@angular/core';
import { Employee } from '../entity/employee'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Skill } from '../entity/skill/skill';
import { Certificate } from '../entity/certificate/certificate';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  private username = "Anuj";
  private password = "123aj321";

  private baseUrl = "http://localhost:8080/employees";

  getEmployeeList(): Observable<Employee[]>{
    const headers = new HttpHeaders({Authorization:'Basic '+btoa(this.username+":"+this.password)});
    return this.httpClient.get<Employee[]>(this.baseUrl,{headers});
  }

  getEmployeeByEmail(email:String): Observable<Employee>{
    const headers = (new HttpHeaders({Authorization:'Basic '+btoa(this.username+":"+this.password)}));
    return this.httpClient.get<Employee>(this.baseUrl+'/'+email, {headers});
  }

  postEmployee(emp:Employee):Observable<Response>{
    const headers = (new HttpHeaders({Authorization:'Basic '+btoa(this.username+":"+this.password)}));
    if(emp.id == undefined)
    return this.httpClient.post<Response>(this.baseUrl, emp, {headers});
    else
    return this.httpClient.put<Response>(this.baseUrl, emp, {headers});
  }

  deleteSkillById(id:number):Observable<Response>{
    const headers = (new HttpHeaders({Authorization:'Basic '+btoa(this.username+":"+this.password)}));
    return this.httpClient.delete<Response>(this.baseUrl + '/skill/' + id, {headers});
  }

  addSkill(skill:Skill):Observable<Response>{
    const headers = (new HttpHeaders({Authorization:'Basic '+btoa(this.username+":"+this.password)}));
      return this.httpClient.post<Response>(this.baseUrl +'/skill', skill, {headers});
    }

  addCertificate(certificate:Certificate):Observable<Response>{
    const headers = (new HttpHeaders({Authorization:'Basic '+btoa(this.username+":"+this.password)}));
      return this.httpClient.post<Response>(this.baseUrl+'/certificate', certificate, {headers});
    }
  
  deleteCertById(id:number):Observable<Response>{
    const headers = (new HttpHeaders({Authorization:'Basic '+btoa(this.username+":"+this.password)}));
      return this.httpClient.delete<Response>(this.baseUrl + '/certificate/' + id, {headers});
  }

  deleteEmployeebyId(id:number):Observable<Response>{
    const headers = (new HttpHeaders({Authorization:'Basic '+btoa(this.username+":"+this.password)}));
    return this.httpClient.delete<Response>(this.baseUrl + '/' + id, {headers});
  }
}
