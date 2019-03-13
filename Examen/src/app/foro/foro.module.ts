import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForoRoutingModule } from './foro-routing.module';
import { MessageContainerComponent } from './components/message-container/message-container.component';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';
import { TopicContainerComponent } from './components/topic-container/topic-container.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import {SharedModule} from "../shared/shared.module";
import { TopicComponent } from './components/topic/topic.component';

@NgModule({
  declarations: [MessageContainerComponent, MessageSenderComponent, TopicContainerComponent, MainContainerComponent, TopicComponent],
  imports: [
    CommonModule,
    ForoRoutingModule,
    SharedModule
  ]
})
export class ForoModule { }
