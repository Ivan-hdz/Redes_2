import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule, MatCardModule, MatSelectModule} from '@angular/material';
import {RESTService} from './services/rest.service';
import {HttpClientModule} from '@angular/common/http';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    MatCardModule,
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    SocketIoModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [RESTService]
})
export class SharedModule { }
