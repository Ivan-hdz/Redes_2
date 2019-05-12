import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {RouterService} from '../../../shared/services/router.service';
import {UserService} from '../../../shared/services/user.service';
import {User} from '../../classes/User';
import {Mensaje} from '../../classes/Mensaje';
import {Observable, of} from 'rxjs';
import {LOGIN_HOME_URL} from '../../../login/values/routes';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit, OnDestroy {
  @ViewChild('scrollableContainer') scroll: ElementRef;
  mensajes$: Observable<Mensaje[]>;
  mensajes: Mensaje[];
  status: boolean;
  userSelected: string;
  inboxByUser: Map<string, Mensaje[]>;
  currentChatID: string;
  usernameMap: Map<string, string>;
   constructor( public router: RouterService, public usServ: UserService) {
    this.mensajes = [];
    this.mensajes$ = of(this.mensajes);
    this.status = true;
    this.currentChatID = '';
    this.userSelected = '';
    this.inboxByUser = new Map<string, Mensaje[]>();
    this.usernameMap = new Map<string, string>();
  }
  switchChat(user: User) {
     if (!this.inboxByUser.has(user.id)) {
       this.inboxByUser.set(user.id , []);
     }
     // Esta linea uff
     this.mensajes$ = of(this.inboxByUser.get(user.id));
     this.currentChatID = user.id;
     this.userSelected = user.username;
  }
  toggleStatus() {
     if (this.status) {
       this.status = false;
       this.usServ.disconnect();
     } else {
       this.status = true;
       this.usServ.connect();
     }
  }
  goLogin() {
    this.router.navigate(LOGIN_HOME_URL);
  }
  ngOnInit() {
    this.usServ.connect();
    this.usServ.getOnlineUsers().subscribe((usrs: User[]) => {
      for (const u of usrs) {
        this.usernameMap.set(u.id, u.username);
      }
    });
    // Mensaje recibido
    this.usServ.getGlobalInbox().subscribe((msg: Mensaje) => {
      if (this.inboxByUser.has(msg.autor)) {
        this.inboxByUser.get(msg.autor).push(msg);
      } else {
        this.inboxByUser.set(msg.autor, [msg]);
      }
    });
  }
  onMessageSent(msg: Mensaje) {
     this.inboxByUser.get(msg.destinatario).push(msg);
     this.usServ.send(msg);
  }
  ngOnDestroy(): void {
  }
}
