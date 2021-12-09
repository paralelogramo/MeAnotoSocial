import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const token = localStorage.getItem('id');

    if (token) {
      return true;
    } else {
      this.router.navigateByUrl('login');
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class EventGuard implements CanActivate {

  constructor(private router: Router){
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const token = sessionStorage.getItem('idModule');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}