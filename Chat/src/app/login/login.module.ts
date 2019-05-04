import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [LoginHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
