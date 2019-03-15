import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainContainerComponent} from './components/main-container/main-container.component';
import {TopicComponent} from './components/topic/topic.component';

const routes: Routes = [
  {path: 'topic',
    children : [
      {
        path: '',
        component: MainContainerComponent
      }, {
        path: '**',
        component: TopicComponent
      }
      ]},
  {path: '', component: MainContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForoRoutingModule { }
