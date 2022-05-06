import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ConsultancyService';
  private isAutheticated:boolean = false;
  isEmployee:boolean = false;
  isEmployer:boolean = false;
  userName!:String;
  private email!:String;

  constructor(private authServ:UserService, private router:Router){}

  ngOnInit(): void {
  }

  LoggedInCheck(){
    if(this.isAutheticated){
      if(this.isEmployee)
      this.router.navigate(['employee']);
      if(this.isEmployer)
      this.router.navigate(['employer']);
    }
  }

  checkAuth():void{
    if(this.authServ.isAuthenticated){
      this.isAutheticated = true;
      this.isEmployee = this.authServ.isEmployee;
      this.isEmployer = this.authServ.isEmployer;
    }
  }

  getAuth(){
    return this.isAutheticated;
  }

  setEmail(email:String){
    this.email = email;
  }

  getEmail(){
    return this.email;
  }
}
