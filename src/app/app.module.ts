import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgDragDropModule} from 'ng-drag-drop';
import { AppComponent } from './app.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AdminHeadComponentComponent } from './admin-head-component/admin-head-component.component';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { TimeLineCompontentComponent } from './time-line-component/time-line-compontent.component';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';
import { MonitorComponentComponent } from './monitor-component/monitor-component.component';
import { TimeLineRouteCompontentComponent } from './time-line-route-compontent/time-line-route-compontent.component';
import { NotificationComponentComponent } from './notification-component/notification-component.component';
import { NotificationRouteComponentComponent } from './notification-route-component/notification-route-component.component';
import { LayoutCompontentComponent } from './layout-compontent/layout-compontent.component';
import { StudentDashComponentComponent } from './student-dash-component/student-dash-component.component';
import { StudentDashComponentSideBarComponent } from './student-dash-component-side-bar/student-dash-component-side-bar.component';
import { StudentFormComponentComponent } from './student-form-component/student-form-component.component';
import { StudentEventComponentComponent } from './student-event-component/student-event-component.component';
import { RegComponentComponent } from './reg-component/reg-component.component';
import { RegComponentLecComponent } from './reg-component-lec/reg-component-lec.component';
import { PopUpComponentComponent } from './pop-up-component/pop-up-component.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {StudentKanbanComponentComponent} from './student-kanban-component/student-kanban-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent,
    NavbarComponentComponent,
    LoginComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    AdminHeadComponentComponent,
    SidebarComponentComponent,
    TimeLineCompontentComponent,
    TodoListComponentComponent,
    MonitorComponentComponent,
    TimeLineRouteCompontentComponent,
    NotificationComponentComponent,
    NotificationRouteComponentComponent,
    LayoutCompontentComponent,
    StudentDashComponentComponent,
    StudentDashComponentSideBarComponent,
    StudentFormComponentComponent,
    StudentEventComponentComponent,
    RegComponentComponent,
    RegComponentLecComponent,
    PopUpComponentComponent,
    StudentKanbanComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
