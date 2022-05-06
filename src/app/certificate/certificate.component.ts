import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Certificate } from '../entity/certificate/certificate';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  certificates!:Certificate[];

  constructor(private employeeServe:EmployeeService, private appCompo:AppComponent) { }

  ngOnInit(): void {
    this.getCertificates();
  }

  getCertificates(){
    this.employeeServe.getEmployeeByEmail(this.appCompo.getEmail()).subscribe(
      data=>{
        this.certificates = data.certificates;
      }
    );
  }

  deleteCertificate(certificateId:number){
    this.employeeServe.deleteCertById(certificateId).subscribe(data=>{
      console.log("delete Success!");
      this.ngOnInit();
    }, (error)=>{ console.log("Something went wrong!") });
  }


}
