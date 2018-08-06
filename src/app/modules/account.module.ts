import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/account/login/login.component';
import { RegisterComponent } from '../components/account/register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';

const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AccountModule { 
 
}
