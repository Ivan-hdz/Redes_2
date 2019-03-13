import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginHomeComponent} from './login/components/login-home/login-home.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', loadChildren: 'src/app/login/login.module#LoginModule'},
  {path: 'foro', loadChildren: 'src/app/foro/foro.module#ForoModule'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
