import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../shared/services/user.service';
import {RouterService} from "../../../shared/services/router.service";

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.scss']
})
export class LoginHomeComponent implements OnInit {

  constructor( private uService: UserService, private router: RouterService) {

  }
  onSubmit(usr: string = '') {
      if(usr !== '') {
        this.uService.setUsername(usr);
        this.router.navigate('/foro');
      } else {
        return false;
      }
  }
  ngOnInit() {
  }

}
