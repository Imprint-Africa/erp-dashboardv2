import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  public loggedUserName: string;
  public sidebarStatus: boolean;


  ngOnInit() {
    this.sidebarStatus = false;
    this.loggedUserName = window.localStorage.getItem('loggedUserName');
  }

  toggleSidebar() {
    this.sidebarStatus = !this.sidebarStatus;
  }

  logout() {
    window.localStorage.removeItem('loggedUserToken');
    window.localStorage.removeItem('loggedUserName');
    this.router.navigate(['/login']);
  }


}
