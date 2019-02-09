import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileContainerRoutingModule } from './file-container-routing.module';
import { ContainerComponent } from './components/container/container.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    FileContainerRoutingModule,
    SharedModule
  ]
})
export class FileContainerModule { }
