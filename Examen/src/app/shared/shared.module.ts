import { NgModule } from '@angular/core';
import {UserService} from './services/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import {RouterService} from './services/router.service';

@NgModule({
  declarations: [],
  exports: [
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule
  ],
  providers: [UserService, RouterService]
})
export class SharedModule { }
