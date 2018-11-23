import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponentComponent} from './login-component/login-component.component';
import {HomeComponentComponent} from './home-component/home-component.component';

const routes: Routes = [
  {path: '#' , redirectTo: HomeComponentComponent},
  {path: 'home' , component: HomeComponentComponent},
  {path: 'login', component: LoginComponentComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
