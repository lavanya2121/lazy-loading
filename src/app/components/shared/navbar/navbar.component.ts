import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  openAccount(){
    this.router.navigateByUrl('/account/login');
    //this.router.navigateByUrl('account/register');
  }
  // openAccount1(){
  //   this.router.navigateByUrl('account/register');
  // }

  openDashboard(){
    this.router.navigateByUrl('/dashboard/home');
    //this.router.navigateByUrl('dashboard/reports');
  }

}
