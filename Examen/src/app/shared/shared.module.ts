import { NgModule } from '@angular/core';
import {UserService} from './services/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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

const config: SocketIoConfig = { url: ENDPOINT, options: {} };
@NgModule({
  declarations: [],
  imports: [
    SocketIoModule.forRoot(config)
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    SocketIoModule
  ],
  providers: [UserService, RouterService]
})
export class SharedModule { }
