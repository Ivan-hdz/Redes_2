import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable, of, Subject} from 'rxjs';
import {Mensaje} from '../classes/Mensaje';
import {Topic} from '../classes/Topic';
import {RouterService} from '../../shared/services/router.service';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private topicName: string;
  private topicMessages$: Observable<Mensaje[]> = this.socket.fromEvent<Mensaje[]>('topic');
  private getTopics$: Observable<string[]> = this.socket.fromEvent<string[]>('getTopics');
  constructor(private socket: Socket, private router: RouterService) {
  }
  getActualTopicName(): string {
    return this.topicName;
  }
  switchTopic(topic: string) {
    this.topicName = topic;
    this.socket.emit('topic', topic);
  }
  sendMessageToTopic(topic: string, msg: Mensaje) {
    const top = new Topic();
    top.nombre = topic;
    top.mensajes.push(msg);
    console.log(JSON.stringify(top));
    this.socket.emit('newMessage', top, () => {
      alert('¡Mensaje posteado!');
    });
  }
  validateTopic(topicName: string) {
    const sub = new Subject<boolean>();
    let flag = false;
    this.getTopicsName().subscribe((arr) => {
      if (arr) {
        for (const name of arr) {
          if (name == topicName) {
            flag = true;
            sub.next(flag);
            break;
          }
        }
        if (!flag) {
          this.router.navigate('');
        }
      }
    });
    return sub.asObservable();
  }
  getMessagesObservable(): Observable<Mensaje[]> {
    return this.topicMessages$;
  }
  getTopicsName(): Observable<string[]> {
    this.socket.emit('getTopics');
    return this.getTopics$;
  }
  newTopic(topic: string) {
    this.socket.emit('newTopic', topic);
  }

}
