import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CertificateComponent } from '../certificate/certificate.component';
import { EmoloyeeAppComponent } from '../emoloyee-app/emoloyee-app.component';
import { EmployerComponent } from '../employer/employer.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegisterComponent } from '../register/register.component';
import { SkillComponent } from '../skill/skill.component';

const routes: Routes = [
 {path: 'employee', component:EmoloyeeAppComponent, canActivate:[AuthGuard]},
 {path: '', component:LoginComponent},
 {path:'register/:role', component:RegisterComponent},
 {path:'employee/skills', component:SkillComponent, canActivate:[AuthGuard]},
 {path:'employee/certificates', component:CertificateComponent, canActivate:[AuthGuard]},
 {path:'employer',component:EmployerComponent, canActivate:[AuthGuard]},
 {path:'employee/profile', component:ProfileComponent, canActivate:[AuthGuard]},
 {path:'employer/profile', component:ProfileComponent, canActivate:[AuthGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }