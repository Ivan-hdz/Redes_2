import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContainerComponent} from './components/container/container.component';
import {ToolboxComponent} from './components/toolbox/toolbox.component';

const routes: Routes = [
  {path: '', component: ToolboxComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileContainerRoutingModule { }
