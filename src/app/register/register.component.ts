import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../entity/employee';
import { Employer } from '../entity/employer';
import { EmployeeService } from '../service/employee.service';
import { EmployerService } from '../service/employer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute, private route: Router,
    private employeeServ:EmployeeService, private employerServ:EmployerService) { }

  isFormValid:boolean = true;
  isEmployee:boolean = false;
  isUserUnique = true;
  employee!:Employee;
  employer!:Employer;

  ngOnInit(): void {
    if(this.actRoute.snapshot.params['role'] == 'employee'){
      this.isEmployee = true;
    }
    else if(this.actRoute.snapshot.params['role'] == 'employer'){
      this.isEmployee = false;
    }
    else{
      alert("Wrong registration role detected. Redirected to login");
      this.route.navigate(['']);
    }
  }

  setNotUnique(){
    this.isUserUnique = false;
  }

  onSubmit(logInForm: NgForm){

    if(this.isEmployee){ //Employee

      if(logInForm.valid){
        
        this.employee = new Employee(logInForm.value.name,logInForm.value.email, logInForm.value.Password,
          logInForm.value.yearsOfExperience,logInForm.value.bio);
        this.employeeServ.postEmployee(this.employee).subscribe((response)=>{
          console.log(this.employee.name);
          this.route.navigate(['']);
        }, (error)=>{
          this.setNotUnique();
        });
      }
      else{
        this.isFormValid = false;
      }

    }
    //Employer
    else{

      if(logInForm.valid){

        this.employer = new Employer(logInForm.value.name, logInForm.value.email,
          logInForm.value.Password, logInForm.value.company, logInForm.value.designation);

        this.employerServ.postEmployer(this.employer).subscribe((resolve)=>{
          this.route.navigate(['']);
          console.log("1 crore!!");
        }, (error)=>{
          this.setNotUnique();
        });

      }
      else{
        this.isFormValid = false;
      }

    }

  }

}
