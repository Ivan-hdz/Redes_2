import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Mensaje} from '../../classes/Mensaje';
import {ENDPOINT} from '../../../../environments/environment';

declare const SocketIOFileUpload: any;
declare const io: any;
@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.scss']
})
export class MessageSenderComponent implements OnInit, OnDestroy {
  @Output() messageSent: EventEmitter<Mensaje> = new EventEmitter<Mensaje>();
  @Input() recieverID: string;
  @Input() username: string;
  @ViewChild('body') body: ElementRef;
  socket: any;
  status: string;
  siofu: any;
  loadingPhoto = false;
  public msgToPost: Mensaje;

  constructor() {
    this.msgToPost = new Mensaje();
    this.status = '';
    if (!this.recieverID) {
      this.recieverID = 'Perros';
    }
    if (!this.username) {
      this.username = 'Iván Hernández';
    }
  }
  onSend(elem ) {
    const d = new Date();
    this.msgToPost.cuerpo = elem.value;
    this.msgToPost.autor = this.username;
    this.msgToPost.hora = d.getHours().toString() + ':' + d.getMinutes().toString() + ':' + d.getSeconds().toString();
    this.msgToPost.fecha = d.getDay().toString() + '/' + d.getMonth().toString() + '/' + d.getFullYear().toString();
    // this.topicServ.sendMessageToTopic(this.topic, this.msgToPost);
    this.messageSent.emit(this.msgToPost);
    elem.value = '';
    this.msgToPost = new Mensaje();
  }
  initSocket() {
    // Initialize instances:
    this.socket = io.connect(ENDPOINT);

    this.siofu = new SocketIOFileUpload(this.socket);
    this.siofu.addEventListener('start', async (event) => {
      console.log('Se empezo a enviar');
      this.loadingPhoto = true;
    });
    // Configure the three ways that SocketIOFileUpload can read files:
    document.getElementById('upload_btn').addEventListener('click', this.siofu.prompt, false);
    // Do something on upload progress:
    this.siofu.addEventListener('progress', (event) => {
      try {
        const percent = event.bytesLoaded / event.file.size * 100;
        console.log('File is', percent.toFixed(2), 'percent loaded');
        this.status = 'Imagen cargada al: ' + percent.toFixed(2) + '%';
      } catch (e) {
        console.log(e);
        this.status = e.toString();
        this.loadingPhoto = false;
      }
    });
    this.socket.on('photoUrl', (url) => {
      console.log(url);
      this.msgToPost.urlFoto = ENDPOINT + '/' +  url;
      this.status = 'Imagen cargada';
      this.loadingPhoto = false;
    });
  }

  ngOnInit() {
     // this.initSocket();
    this.body.nativeElement.value = '\u{1F600}';
  }

  ngOnDestroy(): void {
    this.socket.disconnect();
    this.socket = null;
  }

}
