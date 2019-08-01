import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as store from 'store';

const MINUTES_UNTIL_AUTO_LOGOUT = 15; // in Minutes
const CHECK_INTERVAL = 1000; // in ms
const STORE_KEY = 'lastAction';

@Injectable({
  providedIn: 'root'
})
export class AutologoutService {
  constructor(
    private auth: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.check();
    this.initInterval();
    this.initListener();
  }

  get lastAction() {
    // tslint:disable-next-line: radix
    return parseInt(store.get(STORE_KEY));
  }

  set lastAction(value) {
    store.set(STORE_KEY, value);
  }

  initListener() {
    this.ngZone.runOutsideAngular(() => {
      document.body.addEventListener('click', () => this.reset());
    });
  }

  initInterval() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.check();
      }, CHECK_INTERVAL);
    });
  }

  reset() {
    this.lastAction = Date.now();
  }

  check() {
    const now = Date.now();
    const timeleft = this.lastAction + MINUTES_UNTIL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;

    this.ngZone.run(() => {
      if (isTimeout && this.auth.isLoggedIn) {
        this.auth.logout();
        this.router.navigate(['login']);
        console.log(`You were automatically logged out after ${MINUTES_UNTIL_AUTO_LOGOUT} minutes of inactivity`);
      }
    });
  }
}
