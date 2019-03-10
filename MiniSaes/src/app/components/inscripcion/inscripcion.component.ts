import { Component, OnInit } from '@angular/core';
import {RouterService} from '../../services/router.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent implements OnInit {

  constructor(public router: RouterService) { }

  ngOnInit() {
  }

}
