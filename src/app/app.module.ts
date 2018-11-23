import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent,
    NavbarComponentComponent,
    LoginComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
