import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/dashboard/home/home.component';
import { ReportsComponent } from '../components/dashboard/reports/reports.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'reports',component:ReportsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, ReportsComponent]
})
export class DashboardModule { }
