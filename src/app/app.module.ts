import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, UsersComponent, ServersComponent, UserEditComponent, ServerEditComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
