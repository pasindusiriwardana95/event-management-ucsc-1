import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponentComponent} from './login-component/login-component.component';
import {HomeComponentComponent} from './home-component/home-component.component';
import {AdminHeadComponentComponent} from './admin-head-component/admin-head-component.component';
import {TimeLineRouteCompontentComponent} from './time-line-route-compontent/time-line-route-compontent.component';
import {NotificationRouteComponentComponent} from './notification-route-component/notification-route-component.component';
import {LayoutCompontentComponent} from './layout-compontent/layout-compontent.component';
import {StudentDashComponentComponent} from './student-dash-component/student-dash-component.component';
import {RegComponentComponent} from './reg-component/reg-component.component';
import {RegComponentLecComponent} from './reg-component-lec/reg-component-lec.component';
import {PopUpComponentComponent} from './pop-up-component/pop-up-component.component';
import {StudentNotiComponent} from './student-noti/student-noti.component';
import {WallComponent} from './wall/wall.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponentComponent},
  {path: 'login', component: LoginComponentComponent},
  {path: 'test', component: AdminHeadComponentComponent},
  {path: 'timeline', component: TimeLineRouteCompontentComponent},
  {path: 'noti', component: NotificationRouteComponentComponent},
  {path: 'temp', component: LayoutCompontentComponent},
  {path: 'student-dash', component: StudentDashComponentComponent},
  {path: 'reg', component: RegComponentComponent},
  {path: 'reg2', component: RegComponentLecComponent},
  {path: 'pop', component: PopUpComponentComponent},
  {path: 's-noti', component: StudentNotiComponent},
  {path: 'wall', component: WallComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
