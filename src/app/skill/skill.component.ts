import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Employee } from '../entity/employee';
import { Skill } from '../entity/skill/skill';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills!:Skill[];

  constructor(private employeeServe:EmployeeService, private appCompo:AppComponent,
    private router:Router) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(){
    this.employeeServe.getEmployeeByEmail(this.appCompo.getEmail()).subscribe(
      data=>{
        this.skills = data.skills;
      }
    );
  }

  deleteSkill(skillId:number){
    this.employeeServe.deleteSkillById(skillId).subscribe(data=>{
      console.log("delete Success!");
      this.ngOnInit();
    }, (error)=>{ console.log("Something went wrong!") });
  }

}
