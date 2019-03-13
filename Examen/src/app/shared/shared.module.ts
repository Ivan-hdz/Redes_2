import { NgModule } from '@angular/core';
import {UserService} from './services/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatIconModule, MatInputModule} from '@angular/material';
import {RouterService} from './services/router.service';

@NgModule({
  declarations: [],
  exports: [
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [UserService, RouterService]
})
export class SharedModule { }
