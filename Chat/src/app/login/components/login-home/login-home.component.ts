import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {RouterService} from '../../../shared/services/router.service';
import {User} from '../../../foro/classes/User';
import {FORO_HOME_URL} from '../../../foro/values/routes';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.scss']
})
export class LoginHomeComponent implements OnInit {

  constructor( private uService: UserService, private router: RouterService) {

  }
  onSubmit(usr: string = '') {
      if (usr !== '') {
        const u = new User();
        u.username = usr;
        this.uService.setCurrentUser(u);
        this.router.navigate(FORO_HOME_URL);
      } else {
        return false;
      }
  }
  ngOnInit() {
  }

}
