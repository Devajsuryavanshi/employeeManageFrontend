import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Certificate } from '../entity/certificate/certificate';
import { Employee } from '../entity/employee';
import { Skill } from '../entity/skill/skill';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-emoloyee-app',
  templateUrl: './emoloyee-app.component.html',
  styleUrls: ['./emoloyee-app.component.css']
})
export class EmoloyeeAppComponent implements OnInit {

  constructor(private service: EmployeeService,
    private router: Router, private appComponent:AppComponent) { }

  employees!: Employee[];
  employee!:Employee;
  employeeView!:Employee;

  certificate: Certificate = new Certificate();
  skill: Skill = new Skill();
  skills!: Skill[];
  certificates!: Certificate[];

  private getEmployees(){
    this.service.getEmployeeList().subscribe(data =>{
      this.employees = data;
    })
  }
  ngOnInit(): void {
    this.getEmployees();
    this.getSkillsAndCertificates();
  }

  // Below this contains Skill Handling and Certificate Handling.

  submitSkill():void{
    const emp:Employee = new Employee(this.employee.name,this.employee.email,
      this.employee.password,this.employee.yearsOfExperience,this.employee.bio, this.employee.id);
    let closeButton = document.getElementsByClassName('closeButton')[0] as HTMLElement;
    let clearButton = document.getElementsByClassName('clearButton')[0] as HTMLElement;
    this.skill.setEmployee(emp);
    this.service.addSkill(this.skill).subscribe(data=>{
      this.router.navigate(['']);
    }, (error)=>{alert("Error, Invalid input");});
    clearButton.click();
    closeButton.click();
  }

  submitCertificate():void{
    const emp:Employee = new Employee(this.employee.name,this.employee.email,
      this.employee.password,this.employee.yearsOfExperience,this.employee.bio, this.employee.id);
    let closeButton = document.getElementsByClassName('closeButtonCert')[0] as HTMLElement;
    let clearButton = document.getElementsByClassName('clearButtonCert')[0] as HTMLElement;
    this.certificate.setAchiever(emp);
    this.service.addCertificate(this.certificate).subscribe(data=>{
      this.router.navigate(['']);
    }, (error)=>{alert("Error, Invalid input");});
    clearButton.click();
    closeButton.click();
  }

  getSkillsAndCertificates():void{
    this.service.getEmployeeByEmail(this.appComponent.getEmail()).subscribe(
      data=>{
        this.employee = data;
        this.employeeView = data;
        this.skills = data.skills;
        this.certificates = data.certificates;
      }
    )
  }

  viewEmployee(email:String){
    this.service.getEmployeeByEmail(email).subscribe(data=>{
      this.employeeView = data;
    });
  }

}
