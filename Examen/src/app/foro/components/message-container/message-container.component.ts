import {Component, Input, OnInit} from '@angular/core';
import {Mensaje} from '../../classes/Mensaje';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {
  @Input() message: Mensaje;
  constructor() {
    if (!this.message) {
      this.message = new Mensaje();
    }
  }

  ngOnInit() {
  }

}
