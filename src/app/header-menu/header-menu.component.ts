import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor(private router: Router, public appCompo:AppComponent) { }

  ngOnInit(): void {
  }

  profile(){
    if(this.appCompo.isEmployee)
    this.router.navigate(["employee/profile"]);
    else
    this.router.navigate(["employer/profile"]);
  }

}
