import { NgModule } from '@angular/core';
import {UserService} from './services/user.service';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import {RouterService} from './services/router.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {ENDPOINT} from '../../environments/environment';
import { Error404Component } from './components/error404/error404.component';
import { LoadingComponent } from './components/loading/loading.component';

const config: SocketIoConfig = { url: ENDPOINT, options: {} };
@NgModule({
  declarations: [Error404Component, LoadingComponent],
  imports: [
    SocketIoModule.forRoot(config),
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    SocketIoModule,
    Error404Component,
    LoadingComponent
  ],
  providers: [UserService, RouterService]
})
export class SharedModule { }
