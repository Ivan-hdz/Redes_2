import { Component, OnInit } from '@angular/core';
import {RouterService} from '../../services/router.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent implements OnInit {

  constructor(public router: RouterService) { }

  ngOnInit() {
  }

}
