import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-fibrehome',
  templateUrl: './home-fibrehome.component.html',
  styleUrls: ['./home-fibrehome.component.sass']
})
export class HomeFibrehomeComponent implements OnInit {

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
