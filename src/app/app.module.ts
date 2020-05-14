import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './servers/can-deactivate.service';
 
  



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],

  declarations: [ AppComponent, UsersComponent, ServersComponent, UserEditComponent, ServerEditComponent,               HomeComponent, ServerComponent, UserComponent, ],

  bootstrap:    [ AppComponent ],
  
  providers:  [AuthGuardService,AuthService, CanDeactivateGuard]
})
export class AppModule { }
