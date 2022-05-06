import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Employee } from '../entity/employee';
import { Employer } from '../entity/employer';
import { EmployeeService } from '../service/employee.service';
import { EmployerService } from '../service/employer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public appComponent:AppComponent, private route:Router, private employeeServ:EmployeeService,
    private employerServ:EmployerService) { }

  ngOnInit(): void {
    if(this.appComponent.isEmployee)
    this.getEmployee();
    else
    this.getEmployer();
  }

  employee!:Employee;
  employer!:Employer;

  getEmployee(){
    this.employeeServ.getEmployeeByEmail(this.appComponent.getEmail()).subscribe(data=>{
      this.employee = data;
    });
  }

  getEmployer(){
    this.employerServ.getEmployerByEmail(this.appComponent.getEmail()).subscribe(data=>{
      this.employer = data;
    })
  }

  updateEmployee(){
    this.employeeServ.postEmployee(this.employee).subscribe(data=>{
      alert("Profile Updated!");
      this.route.navigate(['']);
    },(error)=>{
      alert("wrong data input");
    });
  }

  updateEmployer(){
    this.employerServ.postEmployer(this.employer).subscribe(data=>{
      alert("Profile Updated!");
      this.route.navigate(['']);
    },(error)=>{
      alert("wrong data input");
    });
  }

  deleteEmp(){
    if(this.appComponent.isEmployee)
    this.employeeServ.deleteEmployeebyId(this.employee.id);
    else
    this.employerServ.deleteEmployerbyId(this.employer.id);

    window.location.reload();
    }

}
