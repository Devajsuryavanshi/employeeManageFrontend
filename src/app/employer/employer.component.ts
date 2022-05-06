import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Certificate } from '../entity/certificate/certificate';
import { Employee } from '../entity/employee';
import { Skill } from '../entity/skill/skill';
import { EmployeeService } from '../service/employee.service';
import { EmployerService } from '../service/employer.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private employerService: EmployerService,
    private appCompo: AppComponent) { }

  employees!:Employee[];
  skillCount!:Number;
  certCount!:Number;
  employeeEmail:String = "";

  employee!:Employee;
  scEmployee:Employee = new Employee("","","",0,"");
  subEmployee:Employee = new Employee("","","",0,"");

  certificate: Certificate = new Certificate();
  skill: Skill = new Skill();
  
  ngOnInit(): void {
    this.getEmployees();
    this.getSkillCertCount();
    this.getEmployee();
  }

  getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees = data;
    });
  }

  getSkillCertCount(){
    this.employerService.getCertCount().subscribe(data=>{
      this.certCount = data;
    });
    this.employerService.getSkillCount().subscribe(data=>{
      this.skillCount = data;
    })
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployeebyId(id).subscribe(data=>{
      this.ngOnInit();
    });
  }

  submitSkill():void{
    this.getEmployee();
    const emp:Employee = new Employee(this.employee.name,this.employee.email,
      this.employee.password,this.employee.yearsOfExperience,this.employee.bio,this.employee.id);
    let closeButton = document.getElementsByClassName('closeButton')[0] as HTMLElement;
    let clearButton = document.getElementsByClassName('clearButton')[0] as HTMLElement;
    this.skill.setEmployee(emp);
    this.employeeService.addSkill(this.skill).subscribe(data=>{
      this.ngOnInit();
    }, (error)=>{alert("Error, Invalid input");});
    clearButton.click();
    closeButton.click();
  }

  getEmployee(){
    this.employeeService.getEmployeeByEmail(this.employeeEmail).subscribe(data=>{
      this.employee = data;
    });
  }

  submitCertificate():void{
    this.getEmployee();
    const emp:Employee = new Employee(this.employee.name,this.employee.email,
      this.employee.password,this.employee.yearsOfExperience,this.employee.bio,this.employee.id);
    let closeButton = document.getElementsByClassName('closeButtonCert')[0] as HTMLElement;
    let clearButton = document.getElementsByClassName('clearButtonCert')[0] as HTMLElement;
    this.certificate.setAchiever(emp);
    this.employeeService.addCertificate(this.certificate).subscribe(data=>{
      this.ngOnInit();
    }, (error)=>{alert("Error, Invalid input");});
    clearButton.click();
    closeButton.click();
  }

  submitEmployee():void{
    let closeButton = document.getElementsByClassName('closeButtonEmp')[0] as HTMLElement;
    let clearButton = document.getElementsByClassName('clearButtonEmp')[0] as HTMLElement;
    this.employeeService.postEmployee(this.subEmployee).subscribe(data=>{
      alert("Employee added");
      this.ngOnInit();
    }, (error) =>{
      alert("Either employee already exist of wrong data passed.");
    });
    clearButton.click();
    closeButton.click();
  }

  viewEmployee(email:String){
    this.employeeService.getEmployeeByEmail(email).subscribe(data=>{
      this.scEmployee = data;
    });
  }
}
