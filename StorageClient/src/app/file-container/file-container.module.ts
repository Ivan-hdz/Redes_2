import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileContainerRoutingModule } from './file-container-routing.module';
import { ContainerComponent } from './components/container/container.component';
import {SharedModule} from '../shared/shared.module';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
// import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {DirectoryService} from './services/directory.service';
import {FileService} from './services/file.service';

// const config: SocketIoConfig = { url: 'http://10.100.79.140:3000', options: {} };
@NgModule({
  declarations: [ContainerComponent, ToolboxComponent],
  imports: [
    CommonModule,
    FileContainerRoutingModule,
    // SocketIoModule.forRoot(config),
    SharedModule
  ],
  providers: [DirectoryService, FileService]
})
export class FileContainerModule { }
