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
   constructor( public router: RouterService, public usServ: UserService) {
    this.mensajes = [];
    this.mensajes$ = of(this.mensajes);
  }
  ngOnDestroy(): void {
     this.usServ.disconnect();
  }

  ngOnInit() {
    this.usServ.connect();
  }
}
