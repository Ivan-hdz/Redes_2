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
  topicInRoute: string;
  constructor(private router: RouterService, private topicServ: TopicService, private uService: UserService) {
    this.topicInRoute = router.getStringAfterLastSlash().toString();
    this.topicServ.validateTopic(this.topicInRoute).subscribe((flag) => {
      this.isValidTopic = flag;
      if(this.isValidTopic) {
        this.topicServ.switchTopic(this.topicInRoute);
      }
    });
  }
  goHome() {
    this.router.navigate('/foro');
  }
  ngOnInit() {
  }

}
