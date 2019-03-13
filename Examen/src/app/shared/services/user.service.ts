import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: string;
  constructor() { }

  setUsername(n: string) {
    this.username = n;
  }
  getUsername() {
    return this.username;
  }

}
