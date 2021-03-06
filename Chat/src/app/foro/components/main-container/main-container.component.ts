import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {RouterService} from '../../../shared/services/router.service';
import {UserService} from '../../../shared/services/user.service';
import {User} from '../../classes/User';
import {Mensaje} from '../../classes/Mensaje';
import {Observable, of, Subject} from 'rxjs';
import {LOGIN_HOME_URL} from '../../../login/values/routes';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit, OnDestroy {
  @ViewChild('scrollableContainer') scroll: ElementRef;
  mensajes$: Observable<Mensaje[]>;
  userssWithTodos$: Observable<User[]>;
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
    this.currentChatID = 'todos';
    this.userSelected = '';
    this.inboxByUser = new Map<string, Mensaje[]>();
    this.usernameMap = new Map<string, string>();
    this.inboxByUser.set('todos', []);

   }
  initConfig() {
    this.userssWithTodos$ = this.usServ.getOnlineUsers().pipe(map((arr: User[]) => {
      const todos = new User();
      todos.id = 'todos';
      todos.username = 'Todos';
      return [todos].concat(arr);
    }));
    this.usServ.connect();
    this.usServ.getOnlineUsers().subscribe((usrs: User[]) => {
      for (const u of usrs) {
        this.usernameMap.set(u.id, u.username);
      }
    });
    // Mensaje recibido
    this.usServ.getGlobalInbox().subscribe((msg: Mensaje) => {
      if (msg.destinatario === 'todos') {
        this.inboxByUser.get('todos').push(msg);
      } else if (this.inboxByUser.has(msg.autor)) {
        this.inboxByUser.get(msg.autor).push(msg);
      } else {
        this.inboxByUser.set(msg.autor, [msg]);
      }
      if(msg.destinatario !== 'todos') {
        alert('Mensaje recibido de ' + this.usernameMap.get(msg.autor));
      }
    });
  }
  switchChat(user: User = null) {
     if (user == null) {
       this.mensajes$ = of(this.inboxByUser.get('todos'));
       this.currentChatID = 'todos';
       this.userSelected = 'Todos';
     } else {
       if (!this.inboxByUser.has(user.id)) {
         this.inboxByUser.set(user.id , []);
       }
       this.mensajes$ = of(this.inboxByUser.get(user.id));
       this.currentChatID = user.id;
       this.userSelected = user.username;
     }
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
     this.usServ.disconnect();
     this.router.navigate(LOGIN_HOME_URL);
  }
  ngOnInit() {
    this.initConfig();
    this.switchChat();
  }
  onMessageSent(msg: Mensaje) {
     if (msg.destinatario !== 'todos') {
       this.inboxByUser.get(msg.destinatario).push(msg);
     }
     this.usServ.send(msg);
  }
  ngOnDestroy(): void {
  }
}
