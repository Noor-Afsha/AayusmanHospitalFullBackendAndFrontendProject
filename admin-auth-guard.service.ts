import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminauthenticationService } from './adminauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(
    private adminAuthenticationService: AdminauthenticationService,
    private router:Router
  ) { }

  canActivate() {
    if (this.adminAuthenticationService.isUserLoggedIn()) {
      return true;
    } else {
       this.router.navigate(['adminlogin']);
       return false;
    }
  }
}
