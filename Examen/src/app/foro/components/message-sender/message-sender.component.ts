import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Mensaje} from '../../classes/Mensaje';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.scss']
})
export class MessageSenderComponent implements OnInit {
  @Output() messageSent: EventEmitter<Mensaje> = new EventEmitter<Mensaje>();
  @Input() topic: string;
  @Input() username: string;
  constructor() {
    if(!this.topic) {
      this.topic = 'Perros';
    }
    if(!this.username) {
      this.username = 'Iván Hernández';
    }
  }
  onSend() {
    this.messageSent.emit(new Mensaje());
  }
  ngOnInit() {
  }

}
