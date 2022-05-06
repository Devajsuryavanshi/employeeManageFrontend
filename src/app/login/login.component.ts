import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Employer } from '../entity/employer';
import { User } from '../entity/user';
import { EmployeeService } from '../service/employee.service';
import { EmployerService } from '../service/employer.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:UserService, private router: Router, 
    private appComponent:AppComponent, private employeeServ:EmployeeService,
    private employerServ:EmployerService) { }

  isFormValid: boolean = true;
  isCredentialValid:boolean = true;
  test!:Employer;

  ngOnInit(): void {
    this.appComponent.LoggedInCheck();
  }

  onSubmit(logInForm: NgForm){
    const userData = new User(logInForm.value.UserName,
      logInForm.value.Password, logInForm.value.category);
      if(logInForm.value.UserName == '' || logInForm.value.Password =='' || 
      logInForm.value.category ==''){
        this.isFormValid = false;
      }
    this.authService.authenticate(userData).subscribe(data=>{
      
      this.authService.isAuthenticated = data;
      console.log(data);
      if(this.authService.isAuthenticated == false){
        this.isCredentialValid = false;
      }
      else{
        this.authService.isAuthenticated = true;
        if(userData.role == 'employee'){
          this.authService.isEmployee = true;
          this.appComponent.setEmail(userData.email);
          this.employeeServ.getEmployeeByEmail(userData.email).subscribe(data=>{
            this.authService.userName = data.name;
            this.appComponent.userName = data.name;
          });
          this.appComponent.checkAuth();
          this.router.navigate(['employee']);
        }
        else{
          this.authService.isEmployer = true;
          this.appComponent.setEmail(userData.email);
          this.employerServ.getEmployerByEmail(userData.email).subscribe(data=>{
            this.authService.userName = data.name;
            this.appComponent.userName = data.name;
          });
          this.appComponent.checkAuth();
          this.router.navigate(['employer']);
        }
      }

    });

  }

  employeeRegister(){
    let closeButton = document.getElementsByClassName('closeButton')[0] as HTMLElement;
      closeButton.click();
      this.router.navigate(['register','employee']);
  }
  employerRegister(){
    let closeButton = document.getElementsByClassName('closeButton')[0] as HTMLElement;
    closeButton.click();
    this.router.navigate(['register','employer']);
  }

  getEmployerByEmail(){
    this.employerServ.getEmployerByEmail("lothbrok@vk.com").subscribe(data=>{
      this.test = data;
      console.log(this.test);
    },(error)=>{console.log(error)});
  }

}
