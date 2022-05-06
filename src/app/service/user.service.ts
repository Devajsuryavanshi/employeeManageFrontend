import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../entity/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  isAuthenticated:boolean = false;
  isEmployer:boolean = false;
  isEmployee:boolean = false;
  userName!:String;
  private baseUrl = "http://localhost:8080/";

  authenticate(userData:User):Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseUrl + 'authUser', userData);
  }
}
