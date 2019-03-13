import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RouterService} from "../../../shared/services/router.service";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  constructor(private router: RouterService) {

  }

  ngOnInit() {
  }

}
