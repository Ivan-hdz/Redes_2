import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Mensaje} from '../../classes/Mensaje';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit, AfterViewInit {
  @Input() message: Mensaje;
  @Input() autor: string;
  @Input() fromSender: boolean;
  constructor() {
    if (!this.message) {
      this.message = new Mensaje();
    }
    if(this.fromSender  == null ) {
      this.fromSender = false;
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
