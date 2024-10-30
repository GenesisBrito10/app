import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: any;
  private loggedIn = false;

  setUser(user: any) {
    this.user = user;
    this.loggedIn = true;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logout() {
    this.user = null;
    this.loggedIn = false;
  }

  getUser() {
    return this.user;
  }
}
