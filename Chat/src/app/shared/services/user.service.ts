import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {User} from '../../foro/classes/User';
import {RouterService} from "./router.service";
import {Mensaje} from "../../foro/classes/Mensaje";
import {Socket} from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: string;
  private cUser: User;
  constructor(private router: RouterService, private socket: Socket) {
    this.cUser = new User();
  }

  setCurrentUser(u: User){
    this.cUser = u;
  }
  getCurrentUser(): User {
    return this.cUser;
  }
  getUsername() {
    return this.getUsername().username;
  }
  getOnlineUsers(): Observable<User[]> {
    const a = new Array<User>();
    a.push({id: '', username: 't1'});
    a.push({id: '', username: 't2'});
    a.push({id: '', username: 't3'});
    return of(a);
  }
  validateUser(username2Validate: string) {
    const sub = new Subject<boolean>();
    let flag = false;
    this.getOnlineUsers().subscribe((arr) => {
      if (arr) {
        for (const us of arr) {
          if (us.username == username2Validate) {
            flag = true;
            sub.next(flag);
            break;
          }
        }
        if (!flag) {
          this.router.navigate('');
        }
      }
    });
    return sub.asObservable();
  }
  async chat(usernameOfReciever: string) {

  }
}
