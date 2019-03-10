import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouterService} from '../../services/router.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public router: RouterService) { }

  ngOnInit() {
  }
}
