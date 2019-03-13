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
  fg: FormGroup;
  constructor(private fb: FormBuilder, private uService: UserService, private router: RouterService) {
    this.fg = this.fb.group({
      username: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.fg.valid) {
      this.uService.setUsername(this.fg.get('username').value);
      this.router.navigate('/foro');
    } else {
      return false;
    }
  }
  ngOnInit() {
  }

}
