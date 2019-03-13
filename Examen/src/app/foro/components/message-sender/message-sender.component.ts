import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Mensaje} from '../../classes/Mensaje';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.scss']
})
export class MessageSenderComponent implements OnInit {
  @Output() messageSent: EventEmitter<Mensaje> = new EventEmitter<Mensaje>();
  constructor() { }
  onSend() {
    this.messageSent.emit(new Mensaje());
  }
  ngOnInit() {
  }

}
