import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainContainerComponent} from './components/main-container/main-container.component';
import {MessageSenderComponent} from './components/message-sender/message-sender.component';

const routes: Routes = [
  {path: '', component: MessageSenderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForoRoutingModule { }
