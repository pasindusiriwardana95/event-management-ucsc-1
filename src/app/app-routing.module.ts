import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponentComponent} from './login-component/login-component.component';
import {HomeComponentComponent} from './home-component/home-component.component';
import {AdminHeadComponentComponent} from './admin-head-component/admin-head-component.component';
import {TimeLineCompontentComponent} from './time-line-component/time-line-compontent.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponentComponent},
  {path: 'login', component: LoginComponentComponent},
  {path: 'test', component: AdminHeadComponentComponent},
  {path: 'timeline', component: TimeLineCompontentComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
