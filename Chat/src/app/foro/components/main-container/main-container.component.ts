import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {RouterService} from '../../../shared/services/router.service';
import {UserService} from '../../../shared/services/user.service';
import {User} from '../../classes/User';
import {Mensaje} from '../../classes/Mensaje';
import {Observable, of} from 'rxjs';
import {Socket} from "ngx-socket-io";
import {FORO_HOME_URL} from "../../values/routes";
import {LOGIN_HOME_URL} from "../../../login/values/routes";

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit, OnDestroy {
  mensajes$: Observable<Mensaje[]>;
  mensajes: Mensaje[];
  status: boolean;
  inboxByUser: Map<string, Mensaje[]>;
  currentChatID: string;
   constructor( public router: RouterService, public usServ: UserService) {
    this.mensajes = [];
    this.mensajes$ = of(this.mensajes);
    this.status = true;
    this.currentChatID = '';
    this.inboxByUser = new Map<string, Mensaje[]>();
  }
  ngOnDestroy(): void {
     this.usServ.disconnect();
  }
  switchChat(id: string) {
     if(!this.inboxByUser.has(id)) {
       this.inboxByUser.set(id , []);
     }
     this.mensajes$ = of(this.inboxByUser.get(id));
     this.currentChatID = id;
  }
  toggleStatus() {
     if(this.status) {
       this.status = false;
       this.usServ.disconnect();
     } else {
       this.status = true;
       this.usServ.connect();
     }
  }
  ngOnInit() {
    this.usServ.connect();
    this.usServ.getGlobalInbox().subscribe((msg: Mensaje) => {
      console.log('mensaje recibido')
      if(this.inboxByUser.has(msg.destinatario)) {
        this.inboxByUser.get(msg.destinatario).push(msg);
      } else {
        this.inboxByUser.set(msg.destinatario, [msg]);
      }
    });
  }
}
