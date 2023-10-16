import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { EmpService } from './emp.service';

@Injectable({providedIn:'root'})
export class AuthGuard {

  constructor(private service: EmpService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //return true;
    return this.service.getUserLoggedStatus();
  }  
}