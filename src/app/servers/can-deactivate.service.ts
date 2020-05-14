import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()

export interface canDeactiavateComponent{
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean 
}
export class CanDeactivateGuard implements CanDeactivate<canDeactiavateComponent> {

  constructor() { }

  canDeactivate(component: canDeactiavateComponent,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  nextState?: RouterStateSnapshot) :Observable<boolean> | Promise<boolean> | boolean  {
    
    return component.canDeactivate()
  }

}