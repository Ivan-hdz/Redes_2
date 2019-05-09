import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {User} from '../../foro/classes/User';
import {RouterService} from './router.service';
import {Socket} from 'ngx-socket-io';
import {LOGIN_HOME_URL} from '../../login/values/routes';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: string;
  private usersOnline$: Observable<User[]> = this.socket.fromEvent('activeUsers');
  constructor(private router: RouterService, private socket: Socket) {
  }
  setCurrentUser(u: User) {
    localStorage.setItem('user', JSON.stringify(u));
  }
  connect() {
    if(this.getCurrentUser().id !== '') {
      this.disconnect();
    }
    this.socket.emit('connected', this.getCurrentUser().username);
    this.socket.fromOneTimeEvent('connected').then((id: string) => {
      const user = this.getCurrentUser();
      user.id = id;
      this.setCurrentUser(user);
    }).catch((err) => {
      console.log(err);
    });
  }
  disconnect() {
    this.socket.emit('disconnected', this.getCurrentUser());
  }
  getCurrentUser(): User {
    if (localStorage.getItem('user') == null) {
      this.router.navigate(LOGIN_HOME_URL);
    } else {
      return JSON.parse(localStorage.getItem('user'));
    }
  }
  getUsername() {
    return this.getCurrentUser().username;
  }
  getOnlineUsers(): Observable<User[]> {
    return this.usersOnline$;
  }

}
