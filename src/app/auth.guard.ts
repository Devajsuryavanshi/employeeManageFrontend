import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private appCompo:AppComponent, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.appCompo.checkAuth();
      if(this.appCompo.getAuth()){
        console.log(this.appCompo.getAuth());
        if(this.appCompo.isEmployee){

          if(route.url[0].path == 'employee'){
            return true;
          }
          else{
            this.router.navigate(['']);
            return false;
          }
        }
        else{
          if(route.url[0].path == 'employer')
             return true;
          else{
            this.router.navigate(['']);
             return false; 
            }
        }
      }
      else {  this.router.navigate(['']);
        return false; }
  }
  
}
