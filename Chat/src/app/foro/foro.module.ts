import {NgModule, ViewContainerRef} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForoRoutingModule } from './foro-routing.module';
import { MessageContainerComponent } from './components/message-container/message-container.component';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import {SharedModule} from '../shared/shared.module';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmoticonsComponent } from './components/message-sender/emoticons/emoticons.component'

@NgModule({
  declarations: [MessageContainerComponent, MessageSenderComponent, MainContainerComponent, EmoticonsComponent],
  imports: [
    CommonModule,
    ForoRoutingModule,
    PickerModule,
    SharedModule
  ],
  providers: []
})
export class ForoModule { }
