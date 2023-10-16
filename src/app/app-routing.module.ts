import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';
import { AuthGuard } from './auth.guard';
import { TaxesComponent } from './taxes/taxes.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path : "" , component: LoginComponent},
  {path : "login", component:LoginComponent },
  {path : "register", component:RegisterComponent},
  {path : "logout", component:LogoutComponent},
  {path : "reimbursement",  component:ReimbursementComponent},
  {path : "taxes",  component:TaxesComponent},
  {path : "home",  component : HomeComponent},
  {path: "forgot-password", component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
