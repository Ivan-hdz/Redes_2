import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: string;
  constructor() { }

  setUsername(n: string) {
    localStorage.setItem('username', n);
  }
  getUsername() {
    if(localStorage.getItem('username')) {
      return  localStorage.getItem('username');
    } else {
      return 'Anonimo';
    }
  }

}
