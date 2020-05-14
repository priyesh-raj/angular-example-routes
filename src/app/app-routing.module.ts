import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ServerEditComponent } from "./servers/server-edit/server-edit.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuardService } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/can-deactivate.service";


const appRoutes : Routes = [{path:'', component: HomeComponent, pathMatch: 'full'},
  {path:'users', component: UsersComponent},
  {path:'users/:id', component: UserComponent},
  {path:'servers', canActivateChild: [AuthGuardService],component: ServersComponent, children:[
    {path:':id', component: ServerComponent},
    {path:':id/edit', component: ServerEditComponent, canDeactivate: [CanDeactivateGuard]},
  ]}, //uncomment to guard parent component *comment or omit canActivateChild in that case
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule ]
})
export class AppRoutingModule{

  constructor() {}
}