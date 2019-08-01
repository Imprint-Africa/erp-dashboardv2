import { Component } from '@angular/core';
import { AutologoutService } from '../app/services/autologout.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private autoLogout: AutologoutService) {}
}
