import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'account',loadChildren:'./modules/account.module#AccountModule'},
  {path:'dashboard',loadChildren:'./modules/dashboard.module#DashboardModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
