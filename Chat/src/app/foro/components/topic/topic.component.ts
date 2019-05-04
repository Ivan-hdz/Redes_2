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
  usrnameInRoute: string;
  constructor(private router: RouterService, private userServ: UserService, private uService: UserService) {
    this.usrnameInRoute = router.getStringAfterLastSlash().toString();
    this.userServ.validateUser(this.usrnameInRoute).subscribe((flag) => {
      this.isValidTopic = flag;
      if(this.isValidTopic) {
        // this.userServ.chat(this.usrnameInRoute);
      }
    });
  }
  goHome() {
    this.router.navigate('/foro');
  }
  ngOnInit() {
  }

}
