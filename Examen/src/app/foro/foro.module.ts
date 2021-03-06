import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForoRoutingModule } from './foro-routing.module';
import { MessageContainerComponent } from './components/message-container/message-container.component';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import {SharedModule} from '../shared/shared.module';
import { TopicComponent } from './components/topic/topic.component';
import {TopicService} from './services/topic.service';
import {Error404Component} from '../shared/components/error404/error404.component';
import {LoadingComponent} from '../shared/components/loading/loading.component';

@NgModule({
  declarations: [MessageContainerComponent, MessageSenderComponent, MainContainerComponent, TopicComponent],
  imports: [
    CommonModule,
    ForoRoutingModule,
    SharedModule
  ],
  providers: [TopicService]
})
export class ForoModule { }
