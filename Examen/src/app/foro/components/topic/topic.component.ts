import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouterService} from '../../../shared/services/router.service';
import {TopicService} from '../../services/topic.service';
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  isValidTopic = false;
  constructor(private router: RouterService, private topicServ: TopicService, private uService: UserService) {
    this.topicServ.validateTopic(this.router.getStringAfterLastSlash()).subscribe((flag) => {
      this.isValidTopic = flag;
      this.topicServ.switchTopic(this.router.getStringAfterLastSlash());
    });
  }
  ngOnInit() {
  }

}
