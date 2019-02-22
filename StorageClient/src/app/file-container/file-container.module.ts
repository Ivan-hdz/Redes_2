import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileContainerRoutingModule } from './file-container-routing.module';
import { ContainerComponent } from './components/container/container.component';
import {SharedModule} from '../shared/shared.module';
import { ToolboxComponent } from './components/toolbox/toolbox.component';

@NgModule({
  declarations: [ContainerComponent, ToolboxComponent],
  imports: [
    CommonModule,
    FileContainerRoutingModule,
    SharedModule
  ]
})
export class FileContainerModule { }
